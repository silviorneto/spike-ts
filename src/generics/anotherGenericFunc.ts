interface Lenghty {
    length: number
}

// A minha função precisa receber um parametro que tenha a propriedade length, então resolvo isso
// passando a interface acima
// Por padrão o TS vai inferir que meu retorno é um [], mas posso ser mais específico tipando o retorno
function countAndDescribe<T extends Lenghty>(element: T): [Lenghty, string] {
    let descriptionText = 'Got no value'

    if (element.length === 1) {
        descriptionText = 'Got 1 element'
    } else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`
    }

    return [element, descriptionText]
}

console.log('==>', countAndDescribe('Silvio'))
console.log('==>',countAndDescribe(['oi', 'tudo', 'bem?']))
console.log('==>',countAndDescribe([]))
console.log('==>',countAndDescribe(''))
// console.log(countAndDescribe(1)) // erro: number não atende o tipo Lenghty, ou seja, não tem a prop. length