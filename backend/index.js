// Polyfill SlowBuffer for Node 22+ compatibility with buffer-equal-constant-time
const bufferMod = require('buffer');
if (!bufferMod.SlowBuffer) {
    bufferMod.SlowBuffer = bufferMod.Buffer;
}

//app create
require("dotenv").config();
const cors=require("cors");
const express=require("express");
const fileupload=require("express-fileupload");
const app=express();

// PORT find kro 
const PORT=process.env.PORT || 4000;

// middleware add krna hai  
app.use(express.json());
app.use(cors({
    origin: ["*", "http://localhost:5173", "https://world-wise-guide.netlify.app", process.env.FRONTEND_URL || "*"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(
    fileupload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);

// db se connect
const db = require('./config/database');
db.connect().catch(err => console.error("Initial DB connect error:", err.message));

// cloud se connect 
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// Ensure DB is connected for serverless requests
app.use(async (req, res, next) => {
    try {
        await db.connect();
        next();
    } catch (err) {
        console.error("Database connection middleware error:", err.message);
        res.status(500).json({ message: "Database connection failed", error: err.message });
    }
});

// Home Route
app.get("/", (req,res)=>{
    res.json("WorldWise Backend is live");
});

// API Route Mounting
const Upload = require("./routes/FileUpload");
const authRoutes = require("./routes/userRoute");
const TripRoutes = require("./routes/TripPlanner");
const CityRoutes = require("./routes/cityroute");
const tripfirebaseRoutes = require("./routes/trips");

app.use('/api/auth', authRoutes);
app.use('/api/auth/upload', Upload);
app.use('/api/auth/trips', TripRoutes);
app.use('/api/auth/city', CityRoutes);
app.use('/api/auth', tripfirebaseRoutes);

// activating server for standalone run
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    app.listen(PORT,()=>{
        console.log(`App is running at ${PORT}`);
    });
}

module.exports = app;
