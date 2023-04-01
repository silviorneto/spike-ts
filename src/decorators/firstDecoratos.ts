function Logger(constructor: Function) {
    console.log('Logging....')
    console.log(constructor)
}

@Logger
class Persona {
    name = 'Max'

    constructor() {
        console.log('Creating person object...')
    }
}

const perso = new Person()

console.log(perso)