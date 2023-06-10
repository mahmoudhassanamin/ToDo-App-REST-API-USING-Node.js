const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema({
    title:{
        type:String
    }
})

const ToDoModel=mongoose.model("ToDo",todoSchema);

module.exports=ToDoModel;