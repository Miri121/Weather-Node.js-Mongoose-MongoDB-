const Admin = require('../models/adminModel');
const Weather = require('../models/weatherModel');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken')

const createAdmin = async (req, res) => {
    try {
        const newAdmin = new Admin({
            nameAdmin: req.body.nameAdmin
        })
        await newAdmin.save()
        const token = jwt.sign({ nameAdmin: req.body.name }, process.env.TOKEN_SECRET)
        res.status(200).json({ message: "success", newAdmin: newAdmin, token: token })
    } catch (error) {
        res.status(400).json({ message: "error", error: error.message })
    }
}


const getAdmin = (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id).populate('userId')
        res.status(200).json({ message: "success", admin: admin })
    } catch (error) {
        res.status(400).json({ message: "error", error: error.message })
    }
}


const deleteAdmin = async (req, res) => {
    try {
        const admin = await Admin.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "deleted successfuly", admin: admin })
    }
    catch (error) {
        res.status(400).json({ message: "error", error: error.message })
    }
}

//Admin קבלת כל ה 
// const getAllAdmin = (req, res) => {
//     try {
//         const admin = await Admin.find().populate('userId')
//         res.status(200).json({ message: "success", admin: admin })
//     } catch (error) {
//         res.status(400).json({ message: "error", error: error.message })
//     }
// }

module.exports = {
    createAdmin,
    getAdmin,
    // getAllAdmin,
    deleteAdmin
}