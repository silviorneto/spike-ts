// Properties
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property Decorator!!!')
    console.log('target => ', target, 'propertyName => ', propertyName)
}

// Accessor - getters & setters
function Log2(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Accessor Decorator!')
    console.log('target => ', target)
    console.log('name => ', name) // não é o nome da propriedade internamente, mas do setter (nesse exemplo)
    console.log('descriptor => ', descriptor)
}

// Methods
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method Decorator!')
    console.log('target => ', target)
    console.log('name => ', name) 
    console.log('descriptor => ', descriptor)
}

// Parameter
function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter Decorator!')
    console.log('target => ', target)
    console.log('name => ', name) // Nome do método que usa esse parâmetro
    console.log('position => ', position) // Posição do argumento na função
}

class Product {
    @Log
    title: string
    private _price: number

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val
        } else {
            throw new Error('Invalid price - should be positive!')
        }
    }

    constructor(t: string, p: number) {
        this.title = t
        this._price = p
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax)
    }
}