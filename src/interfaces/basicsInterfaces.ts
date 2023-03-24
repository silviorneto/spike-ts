interface Person {
    name: string
    age: number

    greet(phrase: string): void;
}

let newUser: Person;

newUser = {
    name: 'Neto',
    age: 25,
    greet(phrase: string) {
        console.log(`BIIIIIIRRRRRL ${phrase}`)
    }
}