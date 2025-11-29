const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const Hospital = require('../models/Hospital');
const generateToken = require('../utils/generateToken');

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            hospitalId: user.hospitalId,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

// @desc    Register a new user (Hospital Head)
// @route   POST /api/auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, hospitalName, address, lat, lng } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    // Create Hospital first (Pending status)
    const hospital = await Hospital.create({
        name: hospitalName,
        address,
        location: { lat, lng },
        status: 'pending',
    });

    const user = await User.create({
        name,
        email,
        password,
        role: 'hospital_head',
        hospitalId: hospital._id,
    });

    // Link user to hospital
    hospital.adminUser = user._id;
    await hospital.save();

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            hospitalId: user.hospitalId,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

module.exports = { authUser, registerUser };
