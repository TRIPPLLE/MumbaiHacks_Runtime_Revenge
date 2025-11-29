const asyncHandler = require('express-async-handler');
const Hospital = require('../models/Hospital');

// @desc    Get all hospitals
// @route   GET /api/hospitals
// @access  Private/Admin
const getHospitals = asyncHandler(async (req, res) => {
    const hospitals = await Hospital.find({}).populate('adminUser', 'name email');
    res.json(hospitals);
});

// @desc    Get hospital by ID
// @route   GET /api/hospitals/:id
// @access  Private
const getHospitalById = asyncHandler(async (req, res) => {
    const hospital = await Hospital.findById(req.params.id).populate('adminUser', 'name email');
    if (hospital) {
        res.json(hospital);
    } else {
        res.status(404);
        throw new Error('Hospital not found');
    }
});

// @desc    Update hospital status
// @route   PUT /api/hospitals/:id/status
// @access  Private/Admin
const updateHospitalStatus = asyncHandler(async (req, res) => {
    const { status } = req.body;
    const hospital = await Hospital.findById(req.params.id);

    if (hospital) {
        hospital.status = status;
        const updatedHospital = await hospital.save();
        res.json(updatedHospital);
    } else {
        res.status(404);
        throw new Error('Hospital not found');
    }
});

module.exports = { getHospitals, getHospitalById, updateHospitalStatus };
