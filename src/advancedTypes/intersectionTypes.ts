// Em objetos
type Employee = {
    name: string;
    startDate: Date;
}

type Admin = {
    name: string;
    privileges: string[];
}

type ElevatedEmployee = Employee & Admin

let emp: ElevatedEmployee

// Em objetos funciona como a União entre os dois tipos
emp = {
    name: 'Silvio',
    startDate: new Date(),
    privileges: ['superuser']
}

// Observe que eu poderia ter resolvido a mesma coisa com interfaces, estendendo uma da outra
// Ou criando um tipo com as duas interfaces, assim como na linha 12

// Em tipos comuns

type Numeric = number | boolean
type Combinable = string | number

type Gen = Numeric & Combinable

let test: Gen

// Em tipos comuns pega só o que é comum entre os dois tipos, ou seja, a intersecção
test = 2