function LoggerB(logString: string) {
    return function (constructor: Function) {
        console.log(logString)
        console.log(constructor)    
    }
}

@LoggerB('LOGGING - PERSON')
class Person {
    name = 'Max'

    constructor() {
        console.log('Creating person object...')
    }
}

const pers = new Person()

console.log(pers)

function WithTemplate(template: string, hookId: string) {
    // no lugar com constructor passo _, quando não preciso usá-lo
    // assim o TS sabe que eu o declarei, mas que não vou chamá-lo
    return function(constructor: any) {
        const hookEl = document.getElementById(hookId)
        const p = new constructor()
        if (hookEl) {
            hookEl.innerHTML = template
            hookEl.querySelector('h1')!.textContent = p.name
        }
     }
}

@WithTemplate('<h1>My Person Object</h1>', 'app')
class PersonB {
    name = 'TESTE'

    constructor() {
        console.log('Creating person object...')
    }
}
