class DataStorage<T extends string | number | boolean> {
    private data: Array<T> = []

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        this.data = this.data.filter(i => i !== item)
    }

    getItems() {
        return [...this.data]
    }
}

// Observa que eu preciso passar o tipo de dado quando instancio o objeto
const textStorage = new DataStorage<string>();

// O Ts já vai me alerta que não posso adicionar números nesse objeto
// textStorage.addItem(10)

textStorage.addItem('oi')
textStorage.addItem('tudo')
textStorage.addItem('bem')
textStorage.addItem('?')

console.log(textStorage.getItems())

textStorage.removeItem('?')

console.log(textStorage.getItems())

// Posso usar a mesma classe para instanciar um objeto que recebe outro tipo de dado
const numberStorage = new DataStorage<number>();

numberStorage.addItem(5)
numberStorage.addItem(10)
numberStorage.addItem(59)

console.log(numberStorage.getItems())

// E claro, posso usar Union Types
const multipleDataStorage = new DataStorage<number | string>()

multipleDataStorage.addItem(10)
multipleDataStorage.addItem('oi')

console.log(multipleDataStorage.getItems())

// É possível trabalhar com objetos, porém a implementação da classe
// não atende apropriadamente o removeItem()
// Ela foi pensada para tipos primitivos e objetos funcionam de forma
// diferente, por isso complementamos a primeira classe com extends string, number e boolean
// Assim o TS já informa que não aceitará objetos

// const wrongObjStorage = new DataStorage<object>() // Erro: O tipo 'object' não satisfaz a restrição 'string | number | boolean'


class ObjectStorage<T extends object & {id: number}> {
    private data: Array<T> = []

    addItem(...item: Array<T>) {
        this.data = this.data.concat(item)
    }

    removeItem(id: number) {
        this.data = this.data.filter(i => i.id !== id)
    }

    getItems() {
        return [...this.data]
    }
}

class Person {
    constructor(public id: number, public name: string, public age: number ) {}
}

const silvio = new Person(1, 'Silvio', 23)
const claudia = new Person(2, 'Claudia', 21)
const uri = new Person(3, 'Uri', 22)

const personStorage = new ObjectStorage<Person>()

personStorage.addItem(silvio, claudia, uri)
console.log(personStorage.getItems())

personStorage.removeItem(silvio.id)
console.log(personStorage.getItems())
