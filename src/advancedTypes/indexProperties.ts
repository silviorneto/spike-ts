// Suponha que eu tenho um form e estou fazendo validação e tratamento de erros
// crio uma interface para esses erros

// O problema aqui é que eu não sei qual propriedade vou usar aqui, pois depende de qual item do form
// vai ter erro de validação
// Por isso preciso que essa interface seja flexível
// Solução: index types
interface ErrorContainer {
    // posso ter string, number ou symbol como propriedade
    [prop: string]: string; 

    // posso ter propriedades pré-definidas também, desde que seja do mesmo tipo da Index Property acima
    id: string;
}

const errorEmail: ErrorContainer = {
    id: 'email',

    // posso inserir múltiplas propriedades que atendam a index property
    email: 'Not a valid mail',
    username: 'Must init as a character'
}