const router = require('express').Router()

const { RegisterUser } = require("../../../service/RegisterService");

router.post('/register', RegisterUser);

module.exports = router