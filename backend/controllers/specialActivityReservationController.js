const Reservation = require('../models/reservationModel.js');
const SpecialActivity = require('../models/SpecialActivityModel.js')

const getMyReservations = async (req, res) => {
    try {
        const user = req.user;
        console.log(user);
        const reservations = await Reservation.find({ user: user }).populate('activity', 'name type description');
        res.status(200).json(reservations);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};



const getPendingReservations = async (req, res) => {
    const user = req.user;
    try {

        const specialActivities = await SpecialActivity.find({ user: user }, '_id');
        const activityIds = specialActivities.map(activity => activity._id);
        console.log(activityIds);
        const pendingReservations = await Reservation.find({
            activity: { $in: activityIds },
            status: 'PENDING',
        }).populate('user').populate('activity');

        res.status(200).json({ pendingReservations });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const declineReservation = async (req, res) => {
    const { id } = req.params;
    try {
        const reservation = await Reservation.findByIdAndUpdate(
            id,
            { status: 'DECLINED' },
            { new: true }
        );

        if (!reservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        }
        res.status(200).json({ reservation });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const approveReservation = async (req, res) => {
    const { id } = req.params;
    try {
        const reservation = await Reservation.findByIdAndUpdate(
            id,
            { status: 'APPROVED' },
            { new: true }
        );

        if (!reservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        }

        res.status(200).json({ reservation });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};




const createReservation = async (req, res) => {
    try {
        const { activity_id, startDate, startTime, endDate, endTime } = req.body;
        const reservation = new Reservation({
            user: req.user,
            dateRange: {
                startDate,
                endDate,
            },
            timeRange: {
                startTime,
                endTime,
            },
            activity: activity_id,
        });
        const savedReservation = await reservation.save();
        res.status(201).json(savedReservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const deleteReservation = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const deletedReservation = await Reservation.findByIdAndDelete(id);
        if (!deletedReservation) {
            res.status(404).json({ message: 'Reservation not found' });
        } else {
            res.status(200).json(deletedReservation);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getMyReservations, createReservation, deleteReservation, getPendingReservations, declineReservation, approveReservation };
