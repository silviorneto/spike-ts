// vou criar uma função que funde dois objetos nesse exemplo
function merge(objA: object, objB: object) {
    return Object.assign(objA, objB)
}

// Isso funciona
console.log(merge({name: 'Silvio'}, {age: 22}))

// mas e se passarmos o resultado dessa função para uma variável?
const silvio1 = merge({name: 'Silvio'}, {age: 22})
// o meu tipo será object e não vou ter acesso às vantagens do TS (suporte + type safety)
// simplesmente porque para o TS a união de 2 objetos desconhecidos resulta em um objeto desconhecido
// a menos que eu use o type cast
const silvio2 = merge({name: 'Silvio'}, {age: 22}) as {name: string, age: number}

// Usando Generics, o tipo que minha função recebe e retorna não está 'escrito em pedra'
// mas são definidos dinamicamente quando chamados a função
function genericMerge<T extends object, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObj = genericMerge({name: 'Silvio'}, {age: 22})
console.log(mergeObj.age)

// eu ainda posso ser mais específico quanto aos argumentos no momento da chamada da função
// mas isso é considerado redundante, porque o TS infere os tipos para T e U e para isso que o Generics serve
const mergeObj2 = genericMerge<{name: string, hobbies: string[]}, {age: number}>({name: 'Silvio', hobbies: ['Sports']}, {age: 22})
console.log(mergeObj.age)