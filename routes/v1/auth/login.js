const router = require('express').Router()

const { Login } = require("../../../service/AuthService");

router.post('/login', Login);

module.exports = router