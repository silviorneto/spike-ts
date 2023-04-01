function WithTemplate2(template: string, hookId: string) {
    console.log('xxxxxx WithTemplate Factory')

    // Crio um tipo genérico e herdo de um objeto que possua um método "new" que recebe
    // uma lista de argumentos de qualquer tipo e que esse "new" tem como retorno um 
    // objeto

    // O que eu quero dizer com isso? Tô dizendo que meu T genérico é capaz de usar o "new"
    // para instanciar um novo objeto que pode receber nessa instanciação qualquer valor
    // que serão os atributos da classe

    // Observe também que na linha 30, eu preciso que a minha classe possua o atributo name
    // por isso, especifico que o objeto de retorno precisa ter esse atributo
    // Se o decorator for usado numa classe que não o tenha, ele vai reclamar
    return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
        console.log('...... Rendering Template')
        console.log('...... constructor', originalConstructor)

        // Como argumento desse construtor, tenho um spread de argumentos do tipo any, mas
        // como eu não vou chamá-los diretamente, posso substituir pelo _, assim o TS
        // entende que posso usá-los ou não.
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super()
                const hookEl = document.getElementById(hookId)
                // Observe que eu não instancio a classe construtora aqui, como faria se
                // não existisse a função de retorno
                if (hookEl) {
                    hookEl.innerHTML = template
                    hookEl.querySelector('h1')!.textContent = this.name // troco o p.name pelo uso do this
                }
            }
        }
     }
}

@WithTemplate2('<h1>My Person Object</h1>', 'app')
class PersonC {
    name = 'TESTE'

    constructor() {
        console.log('Creating person object...')
    }
}
