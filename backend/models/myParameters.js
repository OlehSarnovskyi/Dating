const mongoose = require('mongoose')

const Schema = mongoose.Schema

const myParametersSchema = new Schema({
    birthDate: {
        type: Date,
        // TODO min max
        required: true,
    },
    sex: {
        type: String,
        required: true
    },
    cities: {
        type: [String],
        required: true
    },
    purposeOfMeet: {
        type: [String],
        required: true
    },
    sexualOrientation: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        min: 91, // and less
        max: 220, // and more
        required: true
    },
    bodyType: {
        type: String,
        required: true
    },
    colorEyes: {
        type: String,
        required: true
    },
    colorHair: {
        type: String,
        required: true
    },
    hobbies: {
        type: [String],
        // TODO min 5
        required: true
    },
    creed: {
        type: String,
        required: true
    }
}, { _id: false })

module.exports = myParametersSchema
