require("dotenv").config();
const connectDB = require("./db.js");
require("./models");
const express = require("express");
const path = require("path");
const {userRouter:UR,todoRouter:TR} =require("./routes")
const app = express();
app.use("/users",UR);
app.use("/todos",TR);
app.use(express.json());
// app.use((re q,res,next)=>{
    //     if(req.headers["content-type"] === "application/json"){
        //         JSON.parse(req.body);
        //     }
        //     next();
        // });
app.use(express.static(path.join(__dirname,"./public")));


app.all("*",(req,res,next)=>{
    res.status(404).json({
        error:"resource not found"
    })
})

app.use((err,req,res,next)=>{
    console.error(err)
    res.status(500).json({
        error:"server error!"
    })
})

connectDB().then(() => {
    app.listen(process.env.port,()=>{
        console.log("app is listening on port 3000")
    });
}).catch((error) => {
    console.log("end")
    process.exit(1);
});
 