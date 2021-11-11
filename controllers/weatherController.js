const Weather = require('../models/weatherModel');
const User = require('../models/userModel');


//יצירת מזג האוויר
const createWeather = async (req, res) => {
    try {
        const newWeather = new Weather({
            nameCity: req.body.nameCity,
            tempMin: req.body.tempMin,
            tempMax: req.body.tempMax,
            userId: req.params.userId
        })
        await newWeather.save()
        //weather של ה id את ה USER קישור ל 
        await User.findByIdAndUpdate(req.params.userId, { $push: { weather: newWeather._id } })
        res.status(200).json({ message: "success", newWeather: newWeather })
    } catch (error) {
        res.status(400).json({ message: "error", error: error.message })
    }
}


//id קבלת מזג האוויר לפי 
const getWeather = async (req, res) => {
    try {
        const weather = await Weather.findById(req.params.weatherId)
        res.status(200).json({ message: "success", weather: weather })
    } catch (error) {
        res.status(400).json({ message: "error", error: error.message })
    }
}


//pre() מחיקת מזג האוויר וגם מהמשתמש שיצר אותו על ידי פונקציית
const deleteWeather = async (req, res) => {
    try {
        const weather = await Weather.findById(req.params.weatherId)
        //pre() ליפני שהוא מוחק הוא הולך לפונקציית 
        await weather.remove()
        res.status(200).json({ message: "success", weather: weather })
    } catch (error) {
        res.status(400).json({ message: "error", error: error.message })
    }
}


module.exports = {
    createWeather,
    getWeather,
    deleteWeather
}