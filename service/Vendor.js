const Vendor = require('../models/Vendor');

module.exports = {
    AddVendor: async (req, res) => {
        const vendor = await Vendor({
            driverName: req.body.driverName,
            vehicleNumber: req.body.vehicleNumber,
            vehicleMake: req.body.vehicleMake,
            vehicleModel: req.body.vehicleModel
        })
        try {
            vendor.save()
            res.status(200).send({ vendor })
        }
        catch (err) {
            res.status(400).send(err)
        }
    }
}