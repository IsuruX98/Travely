const Resturent = require("../models/resturentModel");

const createResturent = async (req, res, next) => {
    const newResturent = new Resturent(req.body);
    const existingRestaurant = await Resturent.find({
        registrationNo: newResturent.registrationNo,
    });
    try {
        if (existingRestaurant.length != 0) {
            return res.status(200).json({ existingRestaurant, error: true, message: "Restaurant already exists" });
        }
        const savedResturent = await newResturent.save();
        res.status(200).json(savedResturent);
    } catch (err) {
        next(err);
    }
}


const findResturentById = async (req, res, next) => {
    const id = req.body.id;
    const resturent = await Resturent.find({
        _id: id
    }).populate('district').populate('user');
    try {
        if (resturent.length != 0) {
            return res.status(200).json(resturent);
        }
        return res.status(200).json({ error: true, message: "No Resturent Found!" });
    } catch (err) {
        next(err);
    }
};
const findResturentByName = async (req, res, next) => {
    const name = req.body.query;
    const regex = new RegExp(name, 'i');
    const resturents = await Resturent.find({
        name: regex
    }).populate('district').populate('user');
    try {
        if (resturents.length != 0) {
            return res.status(200).json(resturents);
        }
        return res.status(200).json({ error: true, message: "No Resturents Found!" });
    } catch (err) {
        next(err);
    }
};
const findFirstFiveResturents = async (req, res, next) => {
    const resturents = await Resturent.find().sort({ createdAt: -1 }).limit(5).populate('district').populate('user');
    try {
        if (resturents.length != 0) {
            return res.status(200).json(resturents);
        }
        return res.status(200).json({ error: true, message: "No Resturents Found!" });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createResturent,
    findResturentByName,
    findFirstFiveResturents,
    findResturentById
};
