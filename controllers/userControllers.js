const User = require('../models/userModel')
const Admin = require('../models/adminModel')

//שימוש במייל
const nodemailer = require('nodemailer')
const sendCommitmail = require('../nodemailer')

//Jwt//
//token//
const jwt = require('jsonwebtoken')

//קריאה משרת מרוחק
const request = require('request')
const requestApi = require('../requestApi')

//יצירת משתמש
const createUser = async (req, res) => {
  try {
    const usnewUser = new User({
      nameUser: req.body.nameUser,
      password: req.body.password,
      phone: req.body.phone,
      mail: req.body.mail
    })
    await usnewUser.save()
    //שליחת מייל בעט יצירת משתמש
    await sendCommitmail(usnewUser.mail, usnewUser.name);

    //admin דחיפה משתמש ל
    await Admin.findByIdAndUpdate(req.params.idAdmin, { $push: { userId: usnewUser._id } })

    //jwt--token
    const token = jwt.sign({ nameUser: req.body.nameUser }, process.env.SECRET)

    res.status(200).json({ message: "success", usnewUser: usnewUser, token: token })
  } catch (error) {
    res.status(400).json({ message: "error", error: error.message })
  }
}

//כניסת משתמש לשליפת נתונים
const login = async (req, res) => {
  try {
    const user = await User.findOne({ nameUser: req.params.name })
    if (user.password == req.params.password) {
      const token = jwt.sign({ nameUser: user.nameUser }, process.env.SECRET)
      res.status(200).json({ message: "success", user: user, token: token })
    }
    else {
      res.status(200).json({ message: "error No Details" })
    }

  } catch (error) {
    res.status(400).json({ message: "error", error: error.message })
  }
}


//קבלת כל המשתמשים ומזג האוויר שלהם
// const getAllUser = async (req,res) => {
//   try{
//     const users = await User.find().populate('weather')
//     res.status(200).json({ message: "success", users: users })
//   }catch(error){
//     res.status(400).json({ message: "error", error: error.message })
//   }
// }


//קבלת משתמש ומזג האוויר שלו
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('weather')
    res.status(200).json({ message: "success", user: user })
  } catch (error) {
    res.status(400).json({ message: "error", error: error.message })
  }
}

//מחיקת משתמש
//ID מחיקה לפי
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId)
    res.status(200).json({ message: "success", user: user })
  } catch (error) {
    res.status(400).json({ message: "error", error: error.message })
  }
}


//קריאה משרת מרוחק
const userRequestApi = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    await requestApi().then(result => {
      res.status(200).json({ message: "success", result: result })
    })
  } catch (error) {
    res.status(400).json({ message: "error", error: error.message })
  }
}


// //מחיקה לפי שם
const deleteUserName = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ nameUser: req.params.nameUser })
    res.status(200).json({ message: "success", user: user })
  } catch (error) {
    res.status(400).json({ message: "error", error: error.message })
  }
}


module.exports = {
  createUser,
  userRequestApi,
  deleteUser,
  deleteUserName,
  // getAllUser,
  getUserById,
  login,

}