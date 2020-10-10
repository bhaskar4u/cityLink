const bcrypt = require('bcryptjs')

const User = require('../models/User');
const { DecodeToken } = require('./AuthService');

module.exports = {
    RegisterUser: async (data, params) => {
        const user = await DecodeToken(params)
        console.log(user);
    }
}