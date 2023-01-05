const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config();
app.use(express.json())

mongoose.connect(process.env.MONGO_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("MongoDB Connected"))
.catch((err) => console.log(err));