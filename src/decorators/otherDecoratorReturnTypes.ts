// OPÇÃO 1: SEM DECORATOR

// class Printer { 
//     message = 'This works!'

//     showMessage() {
//         console.log(this.message)
//     }
// }

// const p = new Printer()

// const button = document.querySelector('btn')! as HTMLButtonElement
// button.addEventListener('click', p.showMessage)

// OPÇÃO 2: COM DECORATOR
function Autobind(
    _: any, 
    _2: string, 
    descriptor: PropertyDescriptor
    ) {
        console.log('>>>> descriptor :', descriptor)

        const originalMethod = descriptor.value

        // sobrescrevendo o descriptor!
        const adjDescriptor: PropertyDescriptor = {
            configurable: true,
            enumerable: false,
            get() {
                // o this tem o contexto aqui da instancia que o
                // está chamando
                const boundFn = originalMethod.bind(this)
                return boundFn
            }
        }
        return adjDescriptor
    }

class Printer { 
    message = 'This works!'
    
    @Autobind
    showMessage() {
        console.log(this.message)
    }
}

const p = new Printer()

const button = document.getElementById('btn')! as HTMLButtonElement
button.addEventListener('click', p.showMessage)
