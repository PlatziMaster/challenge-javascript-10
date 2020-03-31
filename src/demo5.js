const split1 = [1,1,1,1,1,1,1];
const split2 = [2,2,2,2,2,2];
const split3 = [3,3,3,3,3,3,3,3];

const rtaSplit1 = split1.length;
const rtaSplit2 = split2.length;
const rtaSplit3 = split3.length;

const totalReduce = [rtaSplit1, rtaSplit2, rtaSplit3].reduce((count, value) => count + value, 0);;

console.log(totalReduce);