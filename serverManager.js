const libExpress = require('express');
const {libUtil} = require('./util')

const serverManager={}

serverManager.prepare=()=>{
    serverManager.server = libExpress();
}

serverManager.start=()=>{
    serverManager.server.listen(process.env.PORT,()=>{
        libUtil.logger(`Server started Port ${process.env.PORT}`,1)
    })
}

module.exports=serverManager