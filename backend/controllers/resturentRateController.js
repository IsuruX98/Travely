const ResturentRate = require("../models/resturentRateModel");

const getRestaurantRates = async (req, res, next) => {
    try {
        const restaurantRates = await ResturentRate.find();
        res.status(200).json(restaurantRates);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getRestaurantRates,
};
