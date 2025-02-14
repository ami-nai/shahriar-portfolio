const express = require('express');
const Edu = require('../models/education.js');
// const { protect } = require("../middleware/authMiddleware");
// const { isAdmin } = require("../middleware/adminMiddleware");
const router = express.Router();


//Fetch educational details
router.get('/', async (req, res) => {
    try{
        const edu = await Edu.find();
        res.status(200).json(edu);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching educational details.'});
    }
});

//Add educational details
router.post('/', async (req, res) => {
    const edu = req.body; // user will send this data
    if(!edu.institutionName || !edu.duration || !edu.institutionLogo
        || !edu.location || !edu.degree){
            return res.status(400).json({success: false, message: "Please provide all fields"});
        }

    const newEdu = new Edu(edu);

    try{
        await newEdu.save();
        res.status(201).json({success: true, data: newEdu});
    } catch (error) {
        console.error("Error in Create edu:", error.message);
        res.status(500).json({ success: false, message: 'Error fetching educational details.'});
    }
});


module.exports = router;