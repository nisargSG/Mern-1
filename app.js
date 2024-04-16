//import configuration
require('dotenv').config()
//import server manager
const serverManager = require('./serverManager')
//prepapre server
serverManager.prepare();
//start server
serverManager.start();