const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config()
const router = require("./routes/tasks")

const app = express();

//Middleware
app.use(express.json())

//Routes
app.use("/api/tasks", router);


const PORT = process.env.PORT

//DB connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected To DB")
    app.listen(process.env.PORT, ()=>{
        console.log(`listning on port ${PORT}`);
    })
})
.catch((error)=>{console.log(error)})

