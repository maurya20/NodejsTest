const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/test')

const carSchema = mongoose.Schema({
    brand:String,
    model:String,
    year:Number,
    available:Boolean
})

const Car = mongoose.model("Car", carSchema)
const adCar = new Car({
    brand:"Ford",
    model:"Fiesta",
    year:2008,
    available:false
})

adCar.save((err,doc)=>{
    if(err) return console.log(err)
    console.log(doc)
})