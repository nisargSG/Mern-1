const libExpress = require('express');
const router = libExpress.Router();

router.post("/token",(req,res)=>{


    if(req.body.email="nisarg@gmail.com" && req.body.password=="1234"){
        res.status(200).json({token:"1234"})
    }
    else{
        res.status(400).json()
    }

})


module.exports = router


