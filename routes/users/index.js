const router=require("express").Router();

router.post("/registeration",(req,res,next)=>{
    res.status(201).json({
        msg:"registeration"
    })
})
router.post("/login",(req,res,next)=>{
    res.status(201).json({
        msg:"login"
    })
})

router.get("/:id",(req,res,next)=>{
    res.status(200).json({
        msg:"one user"
    })
})

router.get("/",(req,res,next)=>{
    res.status(201).json({
        msg:"users"
    })
})

router.patch("/:id",(req,res,next)=>{
    res.status(201).json({
        msg:`update user ${req.params.id}`
    })
})

router.delete("/:id",(req,res,next)=>{
    res.status(201).json({
        msg:`delete user ${req.params.id}`
    })
})




module.exports=router