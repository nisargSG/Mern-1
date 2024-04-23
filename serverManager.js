const libExpress = require('express');
const {libUtil} = require('./util')
const requestLogger = require('./middleware/requestLogger')

const routerUI = require('./router/ui')

const routeruser = require('./router/api/user')

const routerMovie = require('./router/api/movie')


const serverManager={}

serverManager.prepare=()=>{
    //init server
    serverManager.server = libExpress();
    //static folder
    serverManager.server.use(libExpress.static('static'));
    //ask app to use pug engine
    serverManager.server.set('view engine', 'pug');
    //post body parser
    serverManager.server.use(libExpress.json());
    //middlware
    serverManager.server.use(requestLogger)
    //index
    serverManager.server.use(routerUI)
    
    //APIS are below
    serverManager.server.use("/user",routeruser)

    //movie api
    serverManager.server.use("/movies",routerMovie)
    // incase invalid request comes up
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