const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const Admin = require('../models/adminModel')
dotenv.config();

const checkJwtAdmin = async (req, res, next) => {
    try {
        const adminn = await jwt.verify(req.headers["authorization"], process.env.TOKEN_SECRET)
        console.log("verfiy");

        if (adminn != false) {
            req.admin = adminn.nameAdmin
            next()
        }
    } catch (error) {
        json({ message: "error", error: error.message })
    }
}
module.exports = checkJwtAdmin;