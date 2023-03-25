type TNumeric = number | boolean
type TCombinable = string | number

type TUniversal = TNumeric & TCombinable

// Dessa forma a saída da função é number | string, mas qual é o problema?
function add(a: TCombinable, b: TCombinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    } 
    return a + b
}

// O problema é que quando eu instancio uma variável com o resultado dessa função
// eu não sei qual é o tipo da variável exatamente
const result = add('ITFlex', '-Tecnologia')

// como consequência eu não tenho o apoio do TS para utilizar métodos do tipo
// ele não vai se achar
result.split(' ') // Erro: a prop 'split' não existe no tipo number

// mas como eu poderia resolver isso?
// opção 1 - type cast
const result1 = add('ITFlex', '-Tecnologia') as string 
result1.split(' ') 

// opção 2 - function overload
// function add1(a: number): number // se eu usar ? no param b da chamada principal, isso funciona
function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: TCombinable, b: TCombinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    } 
    return a + b
}

const result2 = add1('ITFlex', '-Tecnologia')
// Agora o TS entende corretamente que minha saída é uma string
result2.split(' ') 

const result3 = add1(1, 2)
// Erro: agora o TS entende corretamente que minha saída é um number 
// e não permite usar o split
result3.split(' ')  