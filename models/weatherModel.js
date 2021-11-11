const mongoose = require('mongoose')
//user חיבור לסכמה 
//midelwer שהיא  pre בשביל פונקציית 
const User = require('./user')


const weatherSchema = mongoose.Schema({
    nameCity: {
        type: String,
        require: true,
        trim: true

    },
    tempMin: {
        default: "0",
        type: String

    },
    tempMax: {
        default: "40",
        type: String

    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: "user"
    },

})


//מחיקת מזג האוויר ממשתמש מסויים
weatherSchema.pre('remove', async function (next) {
    console.log("pre remove!!!")
    await User.findByIdAndUpdate(this.userId, { $pull: { weather: this._id } })
    next()
})


//אחרי יצירת מזג האוויר
weatherSchema.post('save', function (next) {
    console.log("post save!!!!!!!!")
    next()
})

module.exports = mongoose.model('weather', weatherSchema)