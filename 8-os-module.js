// use of built-in nodejs modules
// First kind of buit-in module is OS : Operating system
const os = require('os');

// get info about the current user
const user = os.userInfo();
console.log(user)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    platform: os.platform(),
}
console.log(currentOS)
    //systeme uptime
console.log(`The systeme uptime is ${os.uptime()} seconds`)