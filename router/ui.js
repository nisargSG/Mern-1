const libExpress = require('express');

const router = libExpress.Router();


router.get("/",(req,res)=>{
    res.render("index")
})

router.get("/index",(req,res)=>{
    res.send("index")
})

router.get("/login",(req,res)=>{
    res.send("login page")
})

router.get("/signup",(req,res)=>{
    res.send("signup page")
})


module.exports = router