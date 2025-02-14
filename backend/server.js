const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const eduRoutes = require('./routes/eduRoutes');
const projectsRoutes = require('./routes/projectsRoutes');
const achievementsRoutes = require('./routes/achievementsRoutes');
const skillsRoutes = require('./routes/skillsRoutes');

//Load environment variables
dotenv.config();

//Connect to MongDB
connectDB();

//Initialize Express app
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/edu", eduRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/achievements", achievementsRoutes);
app.use("/api/skills", skillsRoutes);


//Root Route
app.get("/", (req, res) => {
    res.send("Api is running...");
});

//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));

