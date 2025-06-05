const express =require('express')
const mongoose =require('mongoose');
const bodyParser= require('body-parser');
const cors=require('cors');
require("dotenv").config();
const app=express()
app.use(express.json());
app.use('/uploads', express.static('uploads'));

 

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 

const config=require('./config/config')
mongoose.connect(config.mongoURI).then(()=>{
    console.log("Mongo db connected");
}).catch((e)=>{
    console.log(e);
    
});



const contact=require('./routes/contactRoutes');
app.use('/api',contact);
const register=require('./routes/registerRoutes');
app.use('/api',register);
 
const serviceRoutes = require("./routes/serviceRoutes");
app.use("/api/services", serviceRoutes);

const artistRoutes = require("./routes/artistRoutes");
app.use("/api/artists", artistRoutes);


const workRoutes = require("./routes/workRoutes");
app.use("/api/works", require("./routes/workRoutes"));

const wishlistRoutes = require("./routes/wishlistRoutes");

app.use("/api/wishlist", wishlistRoutes);

const categoryRoutes = require("./routes/categoryRoutes");
app.use("/api/categories", categoryRoutes);

const galleryRoutes = require('./routes/galleryRoutes');
app.use('/api/gallery', galleryRoutes);

 

const bookingRoutes = require("./routes/bookingRoutes");
app.use("/api/bookings", bookingRoutes);

const notificationRoutes = require("./routes/notificationRoutes");
app.use("/api/notifications", notificationRoutes);


const inquiryRoutes = require("./routes/inquiryRoutes");
app.use("/api/inquiries", inquiryRoutes);

const reviewRoutes = require("./routes/reviewRoutes");
app.use("/api/reviews", reviewRoutes);

const videoRoutes = require('./routes/videoRoutes');
app.use('/api', videoRoutes);

app.listen( config.PORT,( )=>{
    console.log(`Server Start.... ${config.PORT}`);
    
});