const express = require('express');
const Edu = require('../models/achievements.js');
// const { protect } = require("../middleware/authMiddleware");
// const { isAdmin } = require("../middleware/adminMiddleware");
const router = express.Router();


//Fetch achievement details
router.get('/', async (req, res) => {
    try{
        const achievement = await Achievement.find();
        res.status(200).json(achievement);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching achievement details.'});
    }
});

//Add achievement details
router.post('/', async (req, res) => {
    const achievement = req.body; // user will send this data
    if(!achievement.awardTitle || !achievement.description || !achievement.source){
            return res.status(400).json({success: false, message: "Please provide required fields"});
        }

    const newAchievement = new Achievement(achievement);

    try{
        await newAchievement.save();
        res.status(201).json({success: true, data: newAchievement});
    } catch (error) {
        console.error("Error in Create achievement:", error.message);
        res.status(500).json({ success: false, message: 'Error fetching achievement details.'});
    }
});


module.exports = router;