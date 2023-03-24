interface Animal {
    readonly name: string
}

class Domestic implements Animal {
    name: string

    constructor(n: string){
        this.name = n
    }
}
let cachorro: Animal

cachorro = new Domestic('Cachorro')
console.log(cachorro.name)

cachorro.name = 'Dog' // só reclama se o tipo original for da interface
console.log(cachorro.name)
