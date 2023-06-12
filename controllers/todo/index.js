const {User,ToDo}=require("../../models");

const create=(todo)=> ToDo.create(todo);
const find = ()=>ToDo.find();
const findOne = (todoId)=> ToDo.findById(todoId);
const update = (todoId,updatedToDo)=>ToDo.findByIdAndUpdate(todoId,updatedToDo,{new:true});
const deleteTodo = (todoId)=>ToDo.findByIdAndDelete(todoId);
module.exports={
    create,
    find,
    findOne,
    update,
    deleteTodo
}