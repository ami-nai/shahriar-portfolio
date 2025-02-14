const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {type: String, required: true},
    descriptoin: {type: String, required: true},
    techStack: {type: String, required: true},
    image: {type: String, required: true},
});

module.exports = mongoose.model('Project', projectSchema);
