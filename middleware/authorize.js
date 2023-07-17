const jwt = require("jsonwebtoken");
const util =require("util");
const {userController} = require("../controllers")
const jwtVerify = util.promisify(jwt.verify);

const authorize = async (req,res,next)=>{
    debugger
    const {headers:{authorization}} = req
    if(!authorization?.split(" ")[1])
    return next("Unauthorized");
    
    const token = authorization.split(" ")[1];
    try{
        const authorized = await jwtVerify(token,process.env.JWT_SECRET);
        const user = await userController.findUser(authorized.userId);
        
        req.user=user;
        next()
    }catch(err){
        next(err)
    }
}

module.exports={
    authorize,
}