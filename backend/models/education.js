const mongoose = require('mongoose');

const EduSchema = new mongoose.Schema({
    institutionName: {type: String, required: true },
    degree: {type: String, required: true},
    duration: {type: String, required: true},
    location: {type: String, required: true},
    institutionLogo: {type: String, required: true},
});

module.exports = mongoose.model('Edu', EduSchema);
