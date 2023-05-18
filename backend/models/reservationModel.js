const mongoose = require('mongoose');
const { Schema } = mongoose;

const reservationSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    dateRange: {
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
    },
    timeRange: {
        startTime: { type: String, required: true },
        endTime: { type: String, required: true },
    },
    activity: { type: Schema.Types.ObjectId, ref: 'SpecialActivity', required: true },
    status: {
        type: String,
        enum: ['APPROVED', 'DECLINED', 'PENDING'],
        default: 'PENDING',
    },
});


const reservationModel = mongoose.model('SpecialActivityReservation', reservationSchema);

module.exports = reservationModel;
