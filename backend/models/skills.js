const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    skillTitle: {type: String, required: true }
});

module.exports = mongoose.model('Skill', SkillSchema);
