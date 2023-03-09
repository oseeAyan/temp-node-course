//Second kind of nodejs nuit-in module
// Path module
const path = require('path');

console.log(path.sep);

const fileName = path.join('/contents/', 'subcontent', 'text.txt');
console.log(fileName);

const base = path.basename(fileName);
console.log(base);

// absulute path

const absulute = path.resolve(__dirname, '/contents/', 'subcontent', 'text.txt');
console.log(absulute);