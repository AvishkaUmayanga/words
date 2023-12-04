const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const addWord = require('./routes/addWord')
const fetchWord = require('./routes/getWord')
require('dotenv').config();

const app = express()

app.use(cors());
app.use(express.json());

app.use(addWord)
app.use(fetchWord)

const PORT = process.env.PORT || 4000;
const URL = process.env.MONGODB_URL 

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('connected')
}).catch((error)=>{
    console.log(error)
})

app.listen(PORT, ()=>{
    console.log(PORT,'running..')
})

