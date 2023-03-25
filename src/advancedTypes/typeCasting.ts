const btn = document.getElementById('btn')
btn.value = 'Hi there!' // Erro: btn é possivelmente nulo

// Se eu puser a !, o TS vai entender que esse objeto nunca vai ser nulo
const btn = document.getElementById('btn')!
btn.value = 'Hi there!' // Erro: A propriedade value não existe no tipo HTMLElement

// Primeira forma de resolver => solução do próprio TS -> lib 'dom' -> sintaxe parecido com TSX e pode parecer confuso
const btn = <HTMLInputElement>document.getElementById('btn')!
btn.value = 'Hi there!'

// Segunda forma de resolver => totalmente diferente da sintaxe do TSX
const btn = document.getElementById('btn')! as HTMLInputElement
btn.value = 'Hi there!'

// Se eu não estiver certo que o objeto nunca renderá nulo, uso o if para tratar
// mas veja como preciso fazer o type cast diferente nesse caso
const btn = document.getElementById('btn')

if (btn) {
    (btn as HTMLInputElement).value = 'Hi there!'
}