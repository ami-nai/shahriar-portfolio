const mongoose = require('mongoose');

const AchievementSchema = new mongoose.Schema({
    awardTitle: {type: String, required: true },
    description: {type: String, required: true},
    source: {type: String, required: true},
    image: {type: String},
});

module.exports = mongoose.model('Achievement', AchievementSchema);
