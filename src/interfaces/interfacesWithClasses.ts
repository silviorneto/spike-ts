// Ambas as opções podem ser usadas para descrever um objeto

interface PersonI {
    name: string
    age: number

    greet(phrase: string): void;
}

type PersonT = {
    name: string
    age: number

    greet(phrase: string): void;
}

// Como implementar uma interface
interface Greetable {
    name: string

    greet(phrase: string): void
}

class Human implements Greetable {
    constructor(public name: string, public age: number) {}

    greet(phrase: string): void {
        console.log(phrase)
    }
}

let eu: Greetable

eu = new Human('Neto', 23)

console.log(eu)