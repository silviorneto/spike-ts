const userInput = ''

// O operador lógico OU ||, considera valores falsy. Nem sempre que esses casos caiam no fallback
const storedData = userInput || 'DEFAULT'

console.log('===> ', storedData)

// Se eu quero realmente considerar para o meu fallback apenas undefined e null
// posso usar o nullish coalescing operator

const storedData2 = userInput ?? 'DEFAULT'

console.log('===> ', storedData2)