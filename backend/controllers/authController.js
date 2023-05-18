const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createError } = require("../middleware/error");
const nodemailer = require("nodemailer");

const generateToken = (payload) => {
  const token = jwt.sign(payload, "secretKey", { expiresIn: "1h" });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, "secretKey");
    return decoded;
  } catch (err) {
    throw new Error("Invalid token");
  }
};

// @desc    Register new user
// @route   POST /api/register
// @access  Public
const registerUser = async (req, res, next) => {
  try {
    var salt = await bcrypt.genSaltSync(10);
    var hash = await bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User created successfully");
  } catch (error) {
    next(error);
  }
};

// @desc    Login user
// @route   POST /api/login
// @access  Public
const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send("User not found");
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
      return res.status(404).send("wrong password");
    }

    //create the token
    const token = jwt.sign(
      { id: user, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin, token });
  } catch (error) {
    next(error);
  }
};

// @desc    Logout user
// @route   POST /api/logout
// @access  Private
const logoutUser = (req, res) => {
  res.clearCookie("access_token"); // clear the access_token cookie
  req.session.destroy(); // destroy the session
  res.status(200).send("Logged out successfully"); // send a response to the client
};

//rest password request
const resetpasswordrequest = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const token = generateToken({ userId: user._id });
    const resetLink = `http://localhost:3000/reset-password?token=${token}`;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: "isurusanka98@gmail.com",
        pass: "HGTim@98",
      },
      tls: {
        ciphers: "SSLv3",
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "isurusanka98@gmail.com",
      to: email,
      subject: "Reset Password",
      text: `Please click on the following link to reset your password: ${resetLink}`,
    });

    console.log("Message sent: %s", info.messageId);

    res.json({ message: "Reset password email sent", token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//rest password
const resetpassword = async (req, res) => {
  const { token, password } = req.body;

  try {
    const { userId } = verifyToken(token);
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    var salt = await bcrypt.genSaltSync(10);
    var hash = await bcrypt.hashSync(password, salt);

    user.password = hash;
    await user.save();

    res.json({ message: "Password reset successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const checkEmailExists = async (req, res, next) => {
  try {
    const { email } = req.query;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "Email already exists" });
    }
    return res.status(200).json({ message: "Email is available" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  resetpasswordrequest,
  resetpassword,
  checkEmailExists,
};
