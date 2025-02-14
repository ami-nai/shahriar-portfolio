const express = require('express');
const Edu = require('../models/skills.js');
// const { protect } = require("../middleware/authMiddleware");
// const { isAdmin } = require("../middleware/adminMiddleware");
const router = express.Router();


//Fetch skill details
router.get('/', async (req, res) => {
    try{
        const skill = await Skill.find();
        res.status(200).json(skill);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching skill details.'});
    }
});

//Add skill details
router.post('/', async (req, res) => {
    const skill = req.body; // user will send this data
    if(!skill.skillTitle){
            return res.status(400).json({success: false, message: "Please provide required fields"});
        }

    const newSkill = new Skill(skill);

    try{
        await newSkill.save();
        res.status(201).json({success: true, data: newSkill});
    } catch (error) {
        console.error("Error in Create skill:", error.message);
        res.status(500).json({ success: false, message: 'Error fetching skill details.'});
    }
});


module.exports = router;