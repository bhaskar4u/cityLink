const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    bookingTime: {
        type: Date,
        required: true
    },
    pickupTime: {
        type: Date,
        required: true
    },
    source:
    {
        name: {
            type: String,

        },
        address: {
            address: {
                type: String
            },
            location: {
                type: String
            },
            city: {
                type: String
            },
            state: {
                type: String

            },
            postalCode: {
                type: String
            },
            country: {
                type: String

            }
        },
        latitude: {
            type: String
        },
        longitude: {
            type: String

        }
    }

    ,
    status: {
        type: Boolean,
        default: false
    },
    customer: {
        id: { type: String },
        fullName: { type: String },
        mobile: { type: Number },
        email: { type: String }
    },
    destination: {
        name: { type: String },
        address: {
            address: { type: String },
            location: { type: String },
            city: { type: String },
            state: { type: String },
            postalCode: { type: Number },
            country: { type: String },
            coordinates: {
                latitude: { type: Number },
                longitude: { type: Number }
            }
        }
    },
    vendor: {
        id: { type: String },
        fullName: { type: String },
        vehicleMake: { type: String },
        vehicleNumber: { type: String },
        vehicleModel: { type: String }
    },
    bookingTime: { type: Date },
    pickupTime: { type: Date }
});

module.exports = mongoose.model("Bookings", bookingSchema)