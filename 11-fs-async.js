//Best methode (asynchronize) to use when appllication is builted for multiple users =! from synchronized

// Fourth kind of nodejs buit-in module
const { readFile, writeFile } = require('fs')

console.log('Start')

// For using this methode, we need to define a listener function and an event on a button
// Contrast with the fs-Sync module
readFile('./contents/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./contents/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./contents/result-async.txt', `Here is the result : 1. ${first} , and 2. ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('Done, this task is finished')
        })
    })
})
console.log('Starting the next task');