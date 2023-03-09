// Using npm in the project folder npm init -y
// Using dependencies lodash for exemple
const _ = require('lodash');


const items = [4, [3, [2, [1]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)