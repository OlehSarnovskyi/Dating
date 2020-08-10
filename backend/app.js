const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const authRoutes = require('./routes/auth')
const keys = require('./config/keys')

const app = express()


mongoose.connect(keys.MONGO_URI)
    .then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(error))


app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)

module.exports = app
