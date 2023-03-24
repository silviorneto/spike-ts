interface INamed {
    readonly name: string
    outputName?: string
}

class CPerson implements INamed {
    constructor(public name: string){}
}

// Não implementei outputName e não tive erro

class CPerson2 implements INamed {
    name: string
    age?: number
    address?: string

    constructor(name: string, age?: number, address: string = '') {
        this.name = name
        if (age) {
            this.age = age
        }
        if (address) {
            this.address = address
        }
    }
}

let tu = new CPerson2('Tu')

console.log(".... tu >>> ", tu)