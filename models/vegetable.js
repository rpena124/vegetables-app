const mongoose = require("mongoose")

//we are creating a schema, which ensures the data is in the correct format
const vegetableSchema = new mongoose.Schema({
    name:{type:String , required: true},
    color:{type:String, required:true},
    readyToEat: Boolean
})

//makes a model from the schema
const Vegetable = mongoose.model('Vegetable', vegetableSchema)

//exporting the model for use in the app
module.exports = Vegetable