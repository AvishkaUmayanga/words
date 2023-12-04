const express = require('express')
const router = express.Router()
const wordModel = require('../models/wordModel');

router.get('/', async(req, res) =>{
    try{
        const words = await wordModel.find();
        res.status(200).json(words)
    }
    catch(error){
        res.status(500).json({ error: 'Internal server error', error })
    }
})

module.exports = router