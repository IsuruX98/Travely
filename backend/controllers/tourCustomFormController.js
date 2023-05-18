const customForm = require("../models/tourCustomForm");

const createForm = async (req, res) => {
  try {
    const newForm = new customForm(req.body);
    const savedForm = await newForm.save();

    res.status(200).json({
      status: "success",
      message: "Details Saved! Our Agent will contact you",
      data: {
        form: savedForm,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Unsuccess",
      message: err.message,
    });
  }
};

const getCustomForm = async (req, res) => {
  try {
    const allcustom = await customForm.find();
    res.status(200).send(allcustom);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "unsuccess",
      message: err.message,
    });
  }
};

module.exports = { createForm, getCustomForm };
