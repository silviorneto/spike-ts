var userInput;
var userName;
// Assim como o 'any' posso atribuir qualquer tipo 
userInput = 5;
userInput = 'Silvio';
// Mas se eu tentar atribuir esse valor para uma variável tipada,
// vou precisar fazer um 'extra check'
// userName = userInput //ERRO: O tipo 'unknown' não pode ser atribuído ao tipo 'string'
// Mas se eu fizer um tratamento, não terei problemas
if (typeof userInput === 'string')
    userName = userInput;
/////////////////////////////////////////////////////////
// Agora observe que se eu usar o 'any' não terei essa 'trava'
// porque o 'any' desliga todas as checagens do TS
var userInputAny;
userInputAny = 5;
userName = userInputAny;
console.log('userName >>> ', userName);
