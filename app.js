const mongoose=require('mongoose')
const env=require('dotenv')
env.config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const routes = require('./routs/api')
app.use(routes)
const user=require('../controllers/userControllers')
const nodemailer = require('nodeMailer')
//Jwt//
//token//
const jwt = require('jsonwebtoken')
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