const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/User');

const SecretKey = process.env.SecretKey || "test_121"
module.exports = {
    Login: async (req, res) => {
        const user = await User.findOne({ email: req.body.email })
        try {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const payload = {
                        fullName: user.fullName,
                        email: user.email,
                        mobile: user.mobile,
                        userID: user._id
                    }
                    let token = await jwt.sign(payload, SecretKey, {
                        expiresIn: '1d'
                    })
                    res.status(200).send({ token })
                } else {
                    res.status(400).send("Invalid password")
                }
            } else {
                res.status(400).send("Email Not Recognised")
            }
        } catch (err) {
            res.status(500).send(`Bad Request ${err}`)
        }
    },

    VerifyToken: (req, res, next) => {
        const bearerHeader = req.headers["authorization"];
        if (typeof bearerHeader != "undefined") {
            const bearer = bearerHeader;
            const beareToken = bearer;
            req.token = beareToken;
            next();
        } else {
            res.status(403).send("forbidden");
        }
    },
    DecodeToken: (params) => {
        var token = params.headers["authorization"] || params.query["token"];
        var decoded = {};

        if (token) {
            decoded = jwt.verify(token, SecretKey);
        }

        return decoded;
    }

}