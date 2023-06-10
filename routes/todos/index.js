const router=require("express").Router();

router.post("/create",(req,res,next)=>{
    res.status(201).json({
        msg:"create"
    })
})

router.get("/:id",(req,res,next)=>{
    res.status(200).json({
        msg:"one todo"
    })
})

router.get("/",(req,res,next)=>{
    res.status(201).json({
        msg:"todos"
    })
})

router.patch("/:id",(req,res,next)=>{
    res.status(201).json({
        msg:`update todo ${req.params.id}`
    })
})

router.delete("/:id",(req,res,next)=>{
    res.status(201).json({
        msg:`delete user ${req.params.id}`
    })
})




module.exports=router