const mongoose = require('mongoose')
const authSchema = require('./Auth')
const myParametersSchema = require('./myParameters')

const Schema = mongoose.Schema

const userSchema = new Schema({
    auth: authSchema,
    myParameters: myParametersSchema,
})

module.exports = mongoose.model('users', userSchema)
