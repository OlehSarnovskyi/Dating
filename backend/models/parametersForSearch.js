const mongoose = require('mongoose')

const Schema = mongoose.Schema

const parametersForSearchSchema = new Schema({
    ageFrom: {
        type: Number,
        min: 18,
        max: 56,
        required: true,
    },
    ageTo: {
        type: Number,
        min: 22,
        max: 60, // and more
        required: true,
    },
    sex: {
        type: [String],
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
    sexualOrientations: {
        type: [String],
        required: true
    },
    minHeight: {
        type: Number,
        min: 91, // and less
        max: 190,
        required: true
    },
    maxHeight: {
        type: Number,
        min: 190,
        max: 220, // and more
        required: true
    },
    bodyTypes: {
        type: [String],
        required: true
    },
    colorsEyes: {
        type: [String],
        required: true
    },
    colorsHair: {
        type: [String],
        required: true
    },
    hobbies: {
        type: [String],
        // TODO min 5
        required: true
    },
    creed: {
        type: [String],
        required: true
    }
}, { _id: false })

module.exports = parametersForSearchSchema
