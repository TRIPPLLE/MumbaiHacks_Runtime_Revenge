const mongoose = require('mongoose');

const hospitalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    subscriptionPlan: {
        type: String,
        enum: ['basic', 'pro', 'enterprise'],
        default: 'basic',
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
    },
    adminUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    departments: [{
        name: String,
        hod: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        stats: {
            staffCount: Number,
            patientCount: Number,
            occupancyRate: Number,
        }
    }],
}, {
    timestamps: true,
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;
