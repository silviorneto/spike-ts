function add2(n1: number, n2: number): number {
    return n1 + n2
}

function printResult(n: number): void {
    console.log(`Result: ${n}`)
}

let combineValues: Function;

combineValues = add2
console.log(combineValues(8,8))

// Determinar o tipo Function pode ser um problema, pois qualquer função
// poderá ser passada para a variável, inclusive uma que não tenha
// o mesmo tipo de saída que eu estou esperando

combineValues = printResult

// Como posso ser mais preciso?

let combineValues2: (a: number, b: number) => number;

combineValues2 = add2
console.log(combineValues2(8,8))

// combineValues2 = printResult // ERRO!!
