// Third kind of nodejs buit-in module
const { readFileSync, writeFileSync } = require('fs')

console.log('start')
    // Read the file in nodejs with fs module
const first = readFileSync('./contents/first.txt', 'utf-8');
const second = readFileSync('./contents/second.txt', 'utf-8');

console.log(first, second);

// Write the file in nodejs with fs module
// If there is no file existing, this one will be created automatically
writeFileSync('./contents/result-Sync.txt', `Here is the result : 1...${first} , and 2...${second}`);

console.log('done');
console.log('Starting the next task');