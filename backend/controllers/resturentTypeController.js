const ResturentType = require("../models/resturentTypeModel");

const getRestaurantTypes = async (req, res, next) => {
    try {
        const restaurantTypes = await ResturentType.find();
        res.status(200).json(restaurantTypes);
    } catch (err) {
        next(err);
    }
};


module.exports = {
    getRestaurantTypes,
};
