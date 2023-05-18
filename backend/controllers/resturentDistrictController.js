const ResturentDistrict = require("../models/resturentDistrictModel");

const getRestaurantDistricts = async (req, res, next) => {
    try {
        const restaurantDistricts = await ResturentDistrict.find();
        res.status(200).json(restaurantDistricts);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getRestaurantDistricts,
};
