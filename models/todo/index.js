const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema({
    id:{
        
    },
    title:{
        type:String
    },
    status:{
        type:String,
        enum:["new","inprogress","done"]
    },
    description:{
        type:String
    },
    dueDate:{
        type:Date
    }
},{
  timestamps:true,
  id:false,
})

const ToDoModel=mongoose.model("ToDo",todoSchema);

module.exports=ToDoModel;