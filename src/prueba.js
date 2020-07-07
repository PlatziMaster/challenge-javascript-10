
const x=[10,10,10];
const y=[2,2,2,2,3,2,2,2];
const z=[1,2,2,2,2,2,2,2];

function maximo(dato){
    h= dato.reduce((acc, curr)=> Math.max(acc,curr))
    return h
}

function minimo(dato){
    h= dato.reduce((acc, curr)=> Math.min(acc,curr))
    return h
}

function promedio (dato){
    const reducer = (acc, curr) => (acc+curr);
    var h= dato.reduce(reducer)/dato.length
    return h
}
console.log(promedio(x));
console.log(minimo(z));
console.log(maximo(y));