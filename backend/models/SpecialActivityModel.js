
const mongoose = require('mongoose');
const { Schema } = mongoose;

const specialActivitySchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    dateRange: {
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
    },
    timeRange: {
        startTime: { type: String, required: true },
        endTime: { type: String, required: true },
    },
    type: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    status: {
        type: String,
        enum: ['APPROVED', 'DECLINED', 'PENDING'],
        default: 'PENDING',
    },
});

specialActivitySchema.index({ name: 'text', description: 'text' });

const SpecialActivity = mongoose.model('SpecialActivity', specialActivitySchema);

module.exports = SpecialActivity;
