const auth = require('./auth')
const register = require('./register')

module.exports = [...register, ...auth]