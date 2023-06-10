const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
    },
    password:{
        type:String,
    },
    email:{
        type:String,
    },
    mobile:{
        type:String,
    }
});

const UserModel=mongoose.model("User",userSchema);

module.exports=UserModel; 