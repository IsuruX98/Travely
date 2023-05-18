const express = require('express');
const { getMyReservations, createReservation, deleteReservation, getPendingReservations, approveReservation, declineReservation } = require('../controllers/specialActivityReservationController.js');

const {
    userMiddleware,
    organizerMiddleware,
    adminMiddleware,
} = require('../middleware/authMiddleware.js');


const router = express.Router();

router.get('/', userMiddleware, getMyReservations);
router.post('/create', userMiddleware, createReservation);
router.get('/pending', organizerMiddleware, getPendingReservations)
router.put('/approve/:id', organizerMiddleware, approveReservation)
router.put('/decline/:id', organizerMiddleware, declineReservation)
router.delete('/:id', userMiddleware, deleteReservation);

module.exports = router;
