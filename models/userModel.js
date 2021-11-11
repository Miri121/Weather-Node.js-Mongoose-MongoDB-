const mongoose= require('mongoose')
const Weather = require('./weatherModel');
const userSchema= mongoose.Schema({
    nameUser:{
     type:String,
     require:true,
     trim: true
     
    },
    password:{
        default:"12345",
        type:String,
        minlength: "5",
    
    },
    phone:{
        type:String,
        validate: {
            validator: function (v) {
                return /^$|^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    
    },
    mail:{
        type:String,
        require:true,
        trim: true
        
       },

    weather: [{
         type: mongoose.Schema.Types.ObjectId, ref: "weather"
     }],
    
    })
    
    userSchema.pre('findOneAndDelete',async function(next){
        try{
            console.log("pre remove from user");
            await Weather.deleteMany({ _id: { $in: this.weather} })
        }catch(error){
            console.log(error);
        }
        next()
    }) 

    module.exports=mongoose.model('user',userSchema)