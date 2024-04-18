const libExpress = require('express');
const {libUtil} = require('./util')
const requestLogger = require('./middleware/requestLogger')

const routerMovie = require('./router/movie')

const serverManager={}

serverManager.prepare=()=>{
    //init server
    serverManager.server = libExpress();
    //middlware
    serverManager.server.use(requestLogger)
    //add one listner
    serverManager.server.use("/movies",routerMovie)

    serverManager.server.use((req,res)=>{
        res.status(404).json({error:"No API Found"})
    })
}

serverManager.start=()=>{
    serverManager.server.listen(process.env.PORT,()=>{
        libUtil.logger(`Server started Port ${process.env.PORT}`,1)
    })
}

module.exports=serverManager