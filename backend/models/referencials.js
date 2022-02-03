const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const referencialSchema = new Schema({
    idRef: {
        type: Number,
        required: true,
        min: 0,
        max: process.env.ID_MAX_GR491
    },
    state: {
        type: String,
        enum : ['ToDo','WIP','Done','Not in the scope'],
        required: true,
        default: 'ToDo'
    }
});

var Referencials = mongoose.model('Referencial', referencialSchema);

module.exports = Referencials;