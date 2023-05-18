const mongoose = require('mongoose');
const { Schema } = mongoose;

const activityTypeSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
});

const SpecialActivityType = mongoose.model('ActivityType', activityTypeSchema);

module.exports = SpecialActivityType;