const express = require('express');
const { createActivity, getPendingActivities, getActivity, deleteActivity, approveActivity, getApprovedActivities, declineActivity, filterActivities, getMyActivities } = require('../controllers/activityController.js');

const router = express.Router();

const {
    userMiddleware,
    organizerMiddleware,
    adminMiddleware,
} = require('../middleware/authMiddleware.js');

// Routes
router.get('/', getApprovedActivities);

router.post('/', organizerMiddleware, createActivity);

router.delete('/:id', organizerMiddleware, deleteActivity)

router.get('/myActivities', organizerMiddleware, getMyActivities);
router.put('/approve/:id', adminMiddleware, approveActivity);
router.put('/decline/:id', adminMiddleware, declineActivity);
router.get('/approved', getApprovedActivities);
router.get('/pending', adminMiddleware, getPendingActivities);
router.get('/filter', filterActivities);

router.get('/:id', getActivity);

module.exports = router;
