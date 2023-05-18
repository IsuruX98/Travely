const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "travelyVerification", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;