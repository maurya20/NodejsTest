const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true}, {useUnifiedTopology: true })

const carSchema = mongoose.Schema({
    brand:String,
    model:String,
    year:Number,
    available:Boolean
})

const Car = mongoose.model("Car", carSchema)


// const adCar = new Car({
//     brand:"Tata",
//     model:"x45",
//     year:2019,
//     available:true
// })

// adCar.save((err,doc)=>{
//     if(err) return console.log(err)
//     console.log(doc)
// })

Car.find({brand:"Tata"},(err,doc)=>{
    if(err) return console.log(err)
    console.log(doc)
})