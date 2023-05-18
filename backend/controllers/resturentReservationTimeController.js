const ResturentReservationTime = require("../models/resturentReservationTimeModel");

const getRestaurantReservationTimes = async (req, res, next) => {
    try {
        const restaurantReservationTimes = await ResturentReservationTime.find();
        res.status(200).json(restaurantReservationTimes);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getRestaurantReservationTimes,
};
