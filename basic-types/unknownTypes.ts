let userInput: unknown
let userName: string

// Assim como o 'any' posso atribuir qualquer tipo 
userInput = 5
userInput = 'Silvio'

// Mas se eu tentar atribuir esse valor para uma variável tipada,
// vou precisar fazer um 'extra check'

// userName = userInput //ERRO: O tipo 'unknown' não pode ser atribuído ao tipo 'string'

// Mas se eu fizer um tratamento, não terei problemas

if (typeof userInput === 'string') userName = userInput

/////////////////////////////////////////////////////////

// Agora observe que se eu usar o 'any' não terei essa 'trava'
// porque o 'any' desliga todas as checagens do TS

let userInputAny: any

userInputAny = 5

userName = userInputAny // olha a merda... o userName deveria ser string, mas tá recebendo um number

console.log('userName >>> ' ,userName)