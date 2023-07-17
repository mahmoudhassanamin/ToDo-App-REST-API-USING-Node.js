const {User} =require("../../models");
let jwt = require("jsonwebtoken");
let util = require("util");

const jwtSignAsync=util.promisify(jwt.sign);

const create = (user)=>User.create(user);
const findAll = ()=>User.find();
const findUser = (id)=> User.findById(id);
const findUserByUsername = (username)=> User.findOne({username});
const update = (id,newData)=>User.findByIdAndUpdate(id,newData,{runValidators:true});
const deleteUser = (id)=>User.findByIdAndDelete(id);
const login = async (username,password)=>{
    const user = await findUserByUsername(username)
    if (! user)
        throw new Error("invalid username")

    if (!await user.validatePassword(password))
        throw new Error("invalid password")
    const jwtToken= await jwtSignAsync({
        userId:user._id,
    },process.env.JWT_SECRET,{
        expiresIn:"1d"
    })
    // jwtSignAsync (payload,secret,options)

    return jwtToken
}
module.exports={
    create,
    findAll,
    findUser,
    update,
    deleteUser,
    login,
}
