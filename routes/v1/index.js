const auth = require('./auth')
const register = require('./register')
const bookings = require('./bookings')
const vendor = require('./vendor')


module.exports = [...register, ...auth, ...bookings, ...vendor]