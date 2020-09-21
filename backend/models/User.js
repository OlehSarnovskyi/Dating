const mongoose = require('mongoose')

const authSchema = require('./Auth')
const myParametersSchema = require('./myParameters')
const parametersForSearchSchema = require('./parametersForSearch')

const Schema = mongoose.Schema

const userSchema = new Schema({
    auth: authSchema,
    myParameters: myParametersSchema,
    parametersForSearch: parametersForSearchSchema,
})

module.exports = mongoose.model('users', userSchema)
