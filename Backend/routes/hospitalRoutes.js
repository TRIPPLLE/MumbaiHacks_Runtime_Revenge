const express = require('express');
const router = express.Router();
const { getHospitals, getHospitalById, updateHospitalStatus } = require('../controllers/hospitalController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(protect, admin, getHospitals);
router.route('/:id').get(protect, getHospitalById);
router.route('/:id/status').put(protect, admin, updateHospitalStatus);

module.exports = router;
