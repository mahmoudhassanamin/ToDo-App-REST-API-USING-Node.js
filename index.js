const connectDB = require("./db.js");
const path = require("path");
const express = require("express");
require("dotenv").config();
const {userRouter:UR,todoRouter:TR} =require("./routes")
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname,"./public")));
app.use("/users",UR);
app.use("/todos",TR);


app.all("*",(req,res,next)=>{
    next("mahmoud");
    res.status(404).json({
        error:"resource not found"
    })
})

app.use((err,req,res,next)=>{
    console.log(err)
    res.status(500).json({
        error:err
    })
});

connectDB().then(() => {
    app.listen(process.env.port,()=>{
        console.log("app is listening on port 3000")
    });
}).catch((error) => {
    console.log("end")
    process.exit(1);
});