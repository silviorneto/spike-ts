// const button = document.getElementById('btn')! as HTMLButtonElement

// button.addEventListener("click", function() {
//     this.style.background = 'blue'
// })

class Department {
    name: string

    constructor(n: string) {
        this.name = n;
    }

    describe() {
        console.log('Department: ', this.name)
    }

    // Olha a diferença se eu passar o this como parametro
    // Aqui eu aponto que o this é um objeto Department
    // Logo se eu não cumprir o que o objeto precisa (name, nesse caso)
    // O TS vai retornar um erro
    describe2(this: Department) {
        console.log('Department: ', this.name)
    }
}

const humanResources = new Department("HR")

console.log(humanResources)
humanResources.describe()

// O this sempre vai ser referente ao dono do método, ou seja
// a instancia que chama o método. No caso abaixo, copy
const copy = {name: 'DUMMY', describe: humanResources.describe, describe2: humanResources.describe2}
copy.describe()

console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

humanResources.describe2()
copy.describe2()
