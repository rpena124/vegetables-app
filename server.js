//required modules 

/* 
config will read your .env file, parse the contents, assign it to process.env, 
and return an Object with a parsed key containing the loaded content or an error 
key if it failed.
*/
require('dotenv').config()
const fs = require('fs') //this engine requires the file system module
const express = require('express') //this allows us to write the various post request to the HTTP
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Vegetable  = require('./models/vegetable')

//create an express application
const app = express()

app.use(express.urlencoded({extended:true})) //allows us to process and read from data, allows us to have req.body
app.engine('jsx',require('jsx-view-engine').createEngine()) //allows us to use the view engine
app.set('view engine', 'jsx') //register jsx view engine
mongoose.connect(process.env.MONGO_URI,{useNewURLParser:true, useUnifiedTopology:true}) //make the connections
mongoose.connection.once('open',()=>{
    console.log('connected to mongo DB atlas')
})

//middleware
/* Ask about this code below, still unclear*/
app.use(methodOverride('_method'))

//Index
app.get('/vegetables',(req,res)=>{
    Vegetable.find({},(err, foundVegetables)=>{
        if(err){
            console.error(err)
            res.status(400).send(err)
        }
        else{
            res.render('vegetables/Index',{vegetables: foundVegetables})
        }
    })
})
//NEW
app.get('/vegetables/new', (req , res)=>{
    res.render('vegetables/New')
})
//Delete
//Update

//create
/* Purpose is to create data from a form */
app.post('/vegetables', (req , res)=>{
    //req.body contains all the user input data
    req.body.readyToEat === 'on' ? req.body.readyToEat = true : req.body.readyToEat = false;
    Vegetable.create(req.body,(err, createVegetable)=>{
        if(err){
            console.log(err)
            res.status(400).send(err)
        }else{
            res.redirect('/vegetables')
            // res.send(createVegetable)
        }
    })
})
//Edit

//Show
app.get('/vegetables/:id',(req , res)=>{
    Vegetable.findById(req.params.id , (err,foundVegetable)=>{
        if(err){
            console.error(err)
            res.status(400).send(err)
        }
        else{
            res.render('vegetables/Show',{vegetable:foundVegetable})
        }
    })
})

/* End routs */
app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})