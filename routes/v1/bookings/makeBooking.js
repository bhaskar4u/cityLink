const router = require('express').Router()

const { RegisterUser } = require("../../../service/BookingService");

router.post('/makebooking', RegisterUser);

module.exports = router