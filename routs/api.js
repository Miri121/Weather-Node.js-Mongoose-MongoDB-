<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const user = require('../controllers/userControllers')
const weather = require('../controllers/weatherController')
const admin = require('../controllers/Admin')
const checkJwtAdmin = require('../middleware/crudAdmin')
const checkJwtUser = require('../middleware/crudUser')

/////////////////Admin///////////////

//admin יצירת 
router.post('/createAdmin', admin.createAdmin)

//ואת המשתמשים שלו admin קבלת 
router.get('/getAdmin/:id', checkJwtAdmin, admin.getAdmin)

// //admin מחיקת 
router.delete('/deleteAdmin:id', admin.deleteAdmin)



///////////////USER/////////////////

// יצירת משתמש
router.post('/createUser/:idAdmin', user.createUser)

//id מחיקת משתמש לפי 
router.delete('/deleteUser:userId', checkJwtUser, user.deleteUser)

//name מחיקת משתמש לפי 
router.delete('/deleteUserName/:nameUser', user.deleteUserName)

//קבלת כל המשתמשים ומזג האוויר שלהם
//router.get('/getAllUsers', user.getAllUser)

//קבלת משתמש ומזג האוויר שלו
router.get('/getUserById:userId', checkJwtUser, user.getUserById)


//לפי כניסת שם וסיסמה
router.get('/login/:name/:password', user.login)

//ניתוב לשרת המרוחק
router.get('/userRequestApii/:userId', checkJwtUser, user.userRequestApi)


///////////////WEATHER/////////////////////

//יצירת מזג האוויר וקישור למשתמש שיוצר אותו
router.post('/createWeather/:userId', checkJwtUser, weather.createWeather)

//של מזג האוויר מסויים id קריאה למזג האוויר לפי 
router.get('/getWeather/:weatherId', checkJwtUser, weather.getWeather)

//מחיקת מזג האוויר וגם מהמשתמש שיצר אותו
router.get('/deleteWeather/:weatherId', checkJwtUser, weather.deleteWeather)


module.exports = router
=======
const express = require('express')
const router = express.Router()
const user = require('../controllers/userControllers')
const weather = require('../controllers/weatherController')
const admin = require('../controllers/Admin')
const checkJwtAdmin = require('../middleware/crudAdmin')
const checkJwtUser = require('../middleware/crudUser')

/////////////////Admin///////////////

//admin יצירת 
router.post('/createAdmin', admin.createAdmin)

//ואת המשתמשים שלו admin קבלת 
router.get('/getAdmin/:id', checkJwtAdmin, admin.getAdmin)

// //admin מחיקת 
router.delete('/deleteAdmin:id', admin.deleteAdmin)



///////////////USER/////////////////

// יצירת משתמש
router.post('/createUser/:idAdmin', user.createUser)

//id מחיקת משתמש לפי 
router.delete('/deleteUser:userId', checkJwtUser, user.deleteUser)

//name מחיקת משתמש לפי 
router.delete('/deleteUserName/:nameUser', user.deleteUserName)

//קבלת כל המשתמשים ומזג האוויר שלהם
//router.get('/getAllUsers', user.getAllUser)

//קבלת משתמש ומזג האוויר שלו
router.get('/getUserById:userId', checkJwtUser, user.getUserById)


//לפי כניסת שם וסיסמה
router.get('/login/:name/:password', user.login)

//ניתוב לשרת המרוחק
router.get('/userRequestApii/:userId', checkJwtUser, user.userRequestApi)


///////////////WEATHER/////////////////////

//יצירת מזג האוויר וקישור למשתמש שיוצר אותו
router.post('/createWeather/:userId', checkJwtUser, weather.createWeather)

//של מזג האוויר מסויים id קריאה למזג האוויר לפי 
router.get('/getWeather/:weatherId', checkJwtUser, weather.getWeather)

//מחיקת מזג האוויר וגם מהמשתמש שיצר אותו
router.get('/deleteWeather/:weatherId', checkJwtUser, weather.deleteWeather)


module.exports = router
>>>>>>> a53f3193067378daf6ef1c81759fad025cfae4b4
