const router=require("express").Router();
const {userController}=require("../../controllers");

router.post("/registeration",async (req,res,next)=>{
    const {body}=req
    try{
        const data = await userController.create(body)
        res.status(201).json(data);
    }catch(error){
        next(error);
    }
})
router.post("/login",(req,res,next)=>{
   
})

router.get("/:id",async (req,res,next)=>{
    const {params:{id}}=req
    try{
        const data = await userController.findUser(id)
        res.status(201).json(data);
    }catch(error){
        next(error);
    }
})

router.get("/",async (req,res,next)=>{
    try{
        const data = await userController.findAll()
        res.status(200).json(data);
    }catch(error){
        next(error);
    }
})

router.patch("/:id",async (req,res,next)=>{
    const {params:{id},body}=req
    try{
        const data = await userController.update(id,body);
        res.status(201).json(data);
    }catch(error){
        next(error);
    }
})

router.delete("/:id",async (req,res,next)=>{
    const {params:{id}}=req
    try{
        const data = await userController.deleteUser(id)
        res.status(201).json(data);
    }catch(error){
        next(error);
    }
})




module.exports=router