const mongoose = require('mongoose')
const authSchema = require('./Auth')

const Schema = mongoose.Schema

const userSchema = new Schema({
    authData: authSchema,
})

module.exports = mongoose.model('users', userSchema)
