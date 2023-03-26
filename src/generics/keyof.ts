// No exemplo abaixo, crio uma função que 
// extrai o valor de uma chave de um objeto
function extractAndConvert(obj: object, key: string) {
    return 'Value: ' + obj[key];
}

// Observe TS vai acusar um erro, pois não sabe se o objeto que está sendo recebido
// realmente possui a key
console.log(extractAndConvert({}, 'name')) // Claramente não vai existir


// Usando Generics posso dizer que T estende de um objeto,
// mas como sinalizo que U é uma propriedade de T?
// Usando: extends keyof 
function extractAndConvertFixed<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

console.log(extractAndConvertFixed({name: 'Silvio'}, 'name')) 