const bcrypt = require('bcryptjs')

const User = require('../models/User');

module.exports = {
    RegisterUser: async (req, res) => {
        const checkUser = await User.findOne({ email: req.body.email })
        if (checkUser) return res.status(401).send("Use Another Email")
        const hashPwd = await bcrypt.hashSync(req.body.password, 10)
        const user = await User({
            fullName: req.body.fullName,
            mobile: req.body.mobile,
            email: req.body.email,
            password: hashPwd
        })
        try {
            user.save()
            res.status(200).send({ user })
        }
        catch (err) {
            res.status(500).send(err)
        }
    }
}