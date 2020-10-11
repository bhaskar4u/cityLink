const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    driverName: {
        type: String,
        required: true
    },
    vehicleNumber: {
        type: Number,
        required: true
    },
    vehicleMake: {
        type: String,
        required: true
    },
    vehicleModel: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Vendors", vendorSchema)