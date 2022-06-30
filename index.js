const _ = require('lodash');
const peoples = require('./backend/moduleSystem/peoples');

console.log('Index: ', peoples);
console.log('Last Name: ', _.last(peoples));
