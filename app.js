//מסד נתונים
const mongoose=require('mongoose')
//קובץ הצפנה
const env=require('dotenv')
env.config()
// הקמת שרת 
const express = require('express')
const app = express()

//של פוסטמן body שימוש ב 
const bodyParser = require('body-parser')
app.use(bodyParser.json())

//(url)ניתובים 
const routes = require('./routs/api')
app.use(routes)

//user יבוא ה 
const user=require('../controllers/userControllers')

//שימוש במייל//
const nodemailer = require('nodeMailer')

//Jwt//
//token//
const jwt = require('jsonwebtoken')

//קריאה משרת מרוחק
const request = require('request')




const connectionParams={
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:false,
    useFindAndModify:false,
}
mongoose.connect(process.env.MONGO_DB,connectionParams).then(()=>{
    console.log('connected!!')
}).catch(err=>{console.log('err')});


app.listen(3008, () => {
    console.log('listening on')
})