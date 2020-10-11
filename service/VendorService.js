const Vendor = require('../models/Vendor');
const { DecodeToken } = require('./AuthService')
module.exports = {
    AddVendor: async (data, params) => {
        const user = await DecodeToken(params.req)
        console.log(user.userID);
        const vendor = await Vendor({
            userId: user.userID,
            driverName: data.body.driverName,
            vehicleNumber: data.body.vehicleNumber,
            vehicleMake: data.body.vehicleMake,
            vehicleModel: data.body.vehicleModel
        })
        try {
            vendor.save()
            data.res.status(200).send({ vendor })
        }
        catch (err) {
            res.status(400).send(err)
        }
    }
}