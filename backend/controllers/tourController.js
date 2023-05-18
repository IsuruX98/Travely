const Tour = require("../models/tours");

//Route Handlers
//create tour
const createTour = async (req, res) => {
  try {
    const newTour = new Tour(req.body);
    const savedTour = await newTour.save();
    res.status(200).json({
      status: "Success",
      message: "Tour Adding successfull",
      data: {
        tour: savedTour,
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      status: "Unsuccess",
      message: err.message,
    });
  }
};

//getAll tour list
const getAllTours = async (req, res) => {
  try {
    const allTours = await Tour.find();
    res.status(200).send(allTours);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "unsuccess",
      message: err.message,
    });
  }
};

//find tour by id
const getTour = async (req, res) => {
  try {
    const uID = req.params.id;

    const oneTour = await Tour.findById(uID);
    res.status(200).json({
      status: "Success",
      data: {
        oneTour,
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "unsuccess",
      message: err.message,
    });
  }
};

//update a tour
const updateTour = async (req, res) => {
  try {
    const uID = req.params.id;
    const updatedTour = await Tour.findByIdAndUpdate(uID, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "Success",
      data: {
        tour: updatedTour,
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "unsuccess",
      message: err.message,
    });
  }
};

//delete a tour
const deleteTour = async (req, res) => {
  try {
    const UID = req.params.id;
    const deletedTour = await Tour.findByIdAndDelete(UID);

    res.status(204).json({
      status: "Success",
      data: {
        old: deletedTour,
        tour: "Null",
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "unsuccess",
      message: err.message,
    });
  }
};

module.exports = {
  createTour,
  updateTour,
  getAllTours,
  getTour,
  deleteTour,
};
