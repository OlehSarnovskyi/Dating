const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')
const morgan = require('morgan')

const authRoutes = require('./routes/auth')
const keys = require('./config/keys')

const app = express()


mongoose.connect(keys.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(error))


app.use(passport.initialize())
require('./middleware/passport')(passport)
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)

module.exports = app
