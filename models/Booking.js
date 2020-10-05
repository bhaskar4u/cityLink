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
    source: {
        name: {
            type: String,
            required: true
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
        id: 18567,
        fullName: "Ram",
        vehicleNumber: "KA01AB9876",
        vehicleModel: "Tata Ace"
    },
    bookingTime: { type: Date },
    pickupTime: { type: Date }
});

module.exports = mongoose.model("Bookings", bookingSchema)