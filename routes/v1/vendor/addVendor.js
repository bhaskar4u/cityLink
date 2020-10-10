const router = require('express').Router()

const { AddVendor } = require("../../../service/VendorService");

router.post('/addvendor', AddVendor);

module.exports = router