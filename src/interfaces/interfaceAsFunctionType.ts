// type AddFn = (a: number, b: number) => number;

// embora a interface exista para descrever objetos
// uma função em Js também é um objeto, portanto é possível
// usar interface para tipos de função
interface AddFn  {
    // é como um método/função anônimo(a)
    (a: number, b: number): number
} 

let add: AddFn

add = (n1: number, n2: number) => {
    return n1 + n2
}

