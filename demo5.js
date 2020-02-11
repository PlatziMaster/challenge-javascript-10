const split1 = [100,101,102,103,104,105,106,107,109];
const split2 = [110,111,112,113,114,115,116,117,118,119];
const split3 = [120,121,122,123,124,125,136,127,128,129];

const reduce1 = split1.reduce((count, value) => count + value, 0);
const reduce2 = split2.reduce((count, value) => count + value, 0);
const reduce3 = split3.reduce((count, value) => count + value, 0);

const reduceTotal = [reduce1, reduce2, reduce3];

const rta = reduceTotal.reduce((count, value) => count + value, 0);

console.log(rta);