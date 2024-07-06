const express = require("express");
const unirest = require('unirest')
const home = require('./routes/home')

const app = express();
app.set('trust proxy', true)
app.use(express.json())



app.use('/api/hello', home)





    




module.exports = app