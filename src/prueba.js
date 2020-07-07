

function maximo(dato){
    return Math.max(...dato)
}

function minimo(dato){
    return Math.min(...dato)
}

function promedio (dato){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    var h= dato.reduce(reducer)/dato.length
    return h
}
