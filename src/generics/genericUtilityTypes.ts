// ###### Partial
// Diz ao TS que é um objeto que no final será de um tipo específico, mas
// naquele momento ele é apenas parcialmente aquele tipo
// basicamente ele torna as propriedades opcionais naquele contexto
// Usa-se type casting pra dizer ao TS que o objeto tá completo

// Usabilidade
// Pode ser usado para fazer validações extras, por exemplo

// Exemplo
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title
    courseGoal.description = description
    courseGoal.completeUntil = date
    return courseGoal as CourseGoal
}

//###### Readonly
// Altera a sua variável, array ou objeto para Readonly
// Assim não pode ser mais alterado
// É importante quando quero que o objeto não seja alterado posteriormente e quero
// que o TS reclame

const names: Readonly<string[]> = ['Bruna', 'Rogério']

// Erro: A propriedade 'push' não existe no tipo 'readonly string[]'
names.push('Otávio') 

// Erro: A propriedade 'pop' não existe no tipo 'readonly string[]'
names.pop()

