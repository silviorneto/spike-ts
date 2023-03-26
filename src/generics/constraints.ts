function mergeObjectsWithConstraints<T extends object, U extends object>(a: T, b: U) {
    return Object.assign(a, b)
}

// Observa que seu eu passar uma string no parâmetro b, o TS já alerta
const c = mergeObjectsWithConstraints({name: 'Neto'}, 30) // Erro: O argumento do tipo 'number' não é atribuível ao parâmetro do tipo 'object'.


// No extends, posso passar um objeto específico, Union Types, etc.
function myFunc<T extends MyObj, U extends string | number>(a: T, b: U) {
    ...
}