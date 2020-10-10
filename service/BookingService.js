const bcrypt = require('bcryptjs')

const Vendor = require('../models/Vendor');
const Booking = require('../models/Booking');

const { DecodeToken } = require('./AuthService')

module.exports = {
    RegisterUser: async (data, params) => {
        try {
            const req = data.body
            const sourceReq = data.body.source
            const destinationReq = data.body.destination
            console.log(sourceReq.address);
            const user = await DecodeToken(params.req)
            const getVendor = await Vendor.findOne({ userId: user.userID })
            console.log(user);
            const booking = await Booking({
                bookingTime: Date.now(),
                pickupTime: Date.now(),
                source: { name: user.fullName, address: { address: sourceReq.address, location: sourceReq.location, city: sourceReq.city, state: sourceReq.state, postalCode: sourceReq.postalCode, country: sourceReq.country }, latitude: sourceReq.latitude, longitude: sourceReq.longitude },
                status: req.status,
                customer: { id: data.body.id, fullName: data.body.fullName, mobile: data.body.mobile, email: data.body.email },
                destination: { name: destinationReq.name, address: { address: destinationReq.address, location: destinationReq.location, city: destinationReq.city, state: destinationReq.state, postalCode: destinationReq.postalCode, country: destinationReq.country, coordinates: { latitude: destinationReq.latitude, longitude: destinationReq.longitude } } },
                vendor: { id: getVendor.id, fullName: getVendor.driverName, vehicleNumber: getVendor.vehicleNumber, vehicleMake: getVendor.vehicleMake, vehicleModel: getVendor.vehicleModel },

            })
            booking.save()
            data.res.status(200).send(booking)

        } catch (err) {
            console.log({ "error hai bhai yahi par": err });
        }


    }
}