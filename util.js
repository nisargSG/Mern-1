const libChalk = require("chalk")
const libMoment = require('moment')

const util = {}

//0->normal - white
//1->success - green
//2->warning - yellow
//3->error - red


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


    console.log(util.logColorPicker[escalation](`${util.logSignPicker[escalation]}${libMoment().format("DD-MM-YYYY H:mm")} ${msg}`))
}

module.exports.libUtil = util

