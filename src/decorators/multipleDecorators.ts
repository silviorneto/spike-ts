function LoggerB(logString: string) {
    console.log('xxxxxx LoggerB Factory')
    return function (constructor: Function) {
        console.log(logString)
        console.log(constructor)    
    }
}

function WithTemplate(template: string, hookId: string) {
    console.log('xxxxxx WithTemplate Factory')

    // no lugar com constructor passo _, quando não preciso usá-lo
    // assim o TS sabe que eu o declarei, mas que não vou chamá-lo
    return function(constructor: any) {
        console.log('...... Rendering Template')
        const hookEl = document.getElementById(hookId)
        const p = new constructor()
        if (hookEl) {
            hookEl.innerHTML = template
            hookEl.querySelector('h1')!.textContent = p.name
        }
     }
}

@LoggerB('....... Logging')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class PersonB {
    name = 'TESTE'

    constructor() {
        console.log('Creating person object...')
    }
}