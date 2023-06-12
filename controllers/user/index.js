const {User} =require("../../models");

const create = (user)=>User.create(user);
const findAll = ()=>User.find();
const findUser = (id)=> User.findById(id);
const update = (id,newData)=>User.findByIdAndUpdate(id,newData);
const deleteUser = (id)=>User.findByIdAndDelete(id);

module.exports={
    create,
    findAll,
    findUser,
    update,
    deleteUser,
}
