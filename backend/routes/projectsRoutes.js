const express = require('express');
const Project = require('../models/projects.js');

const router = express.Router();

//Fetch educational details
router.get('/', async (req, res) => {
    try{
        const project = await Project.find();
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching educational details.'});
    }
});


module.exports = router;