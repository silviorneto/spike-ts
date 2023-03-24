
interface Named {
    readonly name: string
}

interface Greet extends Named {
    greet(phrase: string): void
}

class Person implements Greet {
    name: string
    
    constructor(name: string) {
        this.name = name
    }

    greet(phrase: string) {
        console.log(phrase)
    }
}

let uri: Greet

uri = new Person('Uri')


