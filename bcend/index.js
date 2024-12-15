// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const router = require("./routes/contactRoutes.js");
// const app = express();
// require("dotenv").config();
// const port = process.env.PORT || 3000;
// const mongoUrl = process.env.MONGODB_URL;
// // console.log(mongoUrl);
// app.use(cors());

// // Connecting to MongoDB Database
// mongoose
//   .connect(mongoUrl)
//   .then(() => {
//     console.log("DBConnected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // Defining the API routes
// app.get("/", (req, res) => {
//   res.send("Hello Roxiler Systems!");
// });

// app.use('/api',router)


// // Starting the server
// app.listen(port, () => {
//   console.log('API Info : http://localhost:8000/api/')
// });

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/contactRoutes.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/api',router)

mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log('DB connected'))
.catch((err)=> console.log('DB error',err))

app.listen(process.env.PORT, ()=> console.log('Port :',process.env.PORT))