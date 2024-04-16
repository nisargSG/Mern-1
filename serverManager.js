const libExpress = require('express');

const serverManager={}

serverManager.prepare=()=>{
    serverManager.server = libExpress();
}

serverManager.start=()=>{
    serverManager.server.listen(process.env.PORT,()=>{
        console.log(`Server started Port ${process.env.PORT}`)
    })
}

module.exports=serverManager