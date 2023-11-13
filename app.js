const express=require('express');
const mongoose=require('mongoose')
const app=express();
const port=3000;
const router=require('./routes/routes')
const dotenv=require('dotenv').config()

app.use(express.static('public'))
app.use(express.urlencoded())
app.use(express.json())
mongoose.connect(process.env.URL).then(()=>{
    console.log("Successfully connected");
})

app.use('/',router);

app.listen(process.env.PORT,()=>{
    console.log(`just hit port ${process.env.PORT}`)
})