const mongoose = require('mongoose')
const adminSchema = mongoose.Schema({
    nameAdmin: {
        type: String,
    },
    userId: [{
        type: mongoose.Schema.Types.ObjectId, ref: "user"
    }]

})

adminSchema.pre('remove', async function (next) {
    console.log("user in admin remove!!!")
    await User.findByIdAndUpdate(this.userId, { $pull: { weather: this._id } })
    next()
})

module.exports = mongoose.model('admin', adminSchema)