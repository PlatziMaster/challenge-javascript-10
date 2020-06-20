const split1 = [100,101,102,103,104,105,106,107,109];
const split2 = [110,111,112,113,114,115,116,117,118,119];
const split3 = [120,121,122,123,124,125,136,127,128,129];

const reduceSplit1 = split1.reduce((count, item) => count + item, 0);
const reduceSplit2 = split2.reduce((count, item) => count + item, 0);
const reduceSplit3 = split3.reduce((count, item) => count + item, 0);

console.log(reduceSplit1, reduceSplit2, reduceSplit3);
const reduceTotal = [reduceSplit1, reduceSplit2, reduceSplit3].reduce((count, item) => count + item, 0);
console.log(reduceTotal);