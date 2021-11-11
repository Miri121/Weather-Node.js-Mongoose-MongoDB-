const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const User=require('../models/userModell')
dotenv.config();

const checkJwtUser = async (req, res, next) => {
    try {
      const userr=  await jwt.verify(req.headers["authorization"], process.env.TOKEN_SECRET)
        console.log("verfiy");
     
      if(userr!=false){
        req.user=userr.nameUser
         next()
      }
       
    } catch (error) {
        json({ message: "error", error: error.message })
    }
}
module.exports = checkJwtUser;