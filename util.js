const libChalk = require("chalk")
const libMoment = require('moment')
const libFS = require('fs')
const libPath = require('path')
const {MongoClient} = require('mongodb');


const util = {}

util.logSignPicker = {
    0: "[*]",
    1: "[+]",
    2: "[!]",
    3: "[-]",
};

util.logColorPicker = {
    0: libChalk.white,
    1: libChalk.green,
    2: libChalk.yellow,
    3: libChalk.red,
};

util.logger = (msg, escalation = 0) => {

    const log = `${util.logSignPicker[escalation]}${libMoment().format("DD-MM-YYYY H:mm")} ${msg}`

    //terminal log print
    console.log(util.logColorPicker[escalation](log))

    //save into logs file as well
    const logFile =  `${libMoment().format("DD-MM-YYYY")}.log`;

    libFS.access(libPath.join(process.cwd(),"logs",logFile), libFS.constants.F_OK,(error)=>{
        if(error){
            //file not exist -> create file
            libFS.writeFileSync(libPath.join(process.cwd(),"logs",logFile),log)
        }
        else{
            libFS.appendFileSync(libPath.join(process.cwd(),"logs",logFile),`\n${log}`)
        }
    })

}

util.getMongoDbConnection=async (callBack)=>{
    const mongoServerConnection =  new MongoClient(process.env.MONGO_URL);
    try{
        await mongoServerConnection.connect()
        util.logger("Mongo DB Connected...",1)
        await callBack(mongoServerConnection.db())
        util.logger("Data Was Served...",1)
    }
    catch(e){
        util.logger(e,3);
    }
    finally{
        await  mongoServerConnection.close()
        util.logger("Mongo DB Disconnected...",1)
    }



}

module.exports.libUtil = util

