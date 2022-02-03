const mongoose = require('mongoose');
const referencialSchema = require('./referencials')
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    customer: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    referencials: [referencialSchema.schema]
},
{
    timestamps: true
}
);

var Projects = mongoose.model('Project', projectSchema);

module.exports = Projects;