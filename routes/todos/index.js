const router=require("express").Router();
const {todoController}=require("../../controllers")





router.post("/create",async (req,res,next)=>{
    try{
        const todo = await todoController.create(req.body);
        res.status(201).json(todo);
    }catch(error){
        next(error);
    }
})

router.get("/:id",async (req,res,next)=>{
    const {params}=req;
    try{
        const result = await todoController.findOne(params.id);
        res.status(201).json(result);
    }catch(error){
        next(error);
    }
})

router.get("/",async (req,res,next)=>{
    const {body}=req;
    try{
        const result = await todoController.find();
        res.status(201).json(result);
    }catch(error){
        next(error);
    }
    
})

router.patch("/:id",async (req,res,next)=>{
    const {params:{id},body}=req;
    try{
        const data = await todoController.update(id,body);
        res.status(201).json(data);
    }catch(error){
        next(error);
    }  
})

router.delete("/:id",async (req,res,next)=>{
    const {id} = req.params
    try{
        const data = await todoController.deleteTodo(id);
        res.status(201).json(data);
    }catch(error){
        next(error)
    }
    
})




module.exports=router