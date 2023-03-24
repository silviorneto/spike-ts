class Department1 {
    public name: string
    private employees: string[] = []

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department1) {
        console.log('Department: ', this.name)
    }

    addEmployee(emp: string) {
        this.employees.push(emp)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const accounting1 = new Department1('Account')
accounting1.describe()

accounting1.addEmployee("Silvio")
accounting1.printEmployeeInformation()

// Agora olha a merda
// Posso mexer direto no atributo se eu não tiver um modificador private
// accounting.employees[1] = "Neto"

// Sendo público posso alterar sem problemas
accounting1.name = "Contabilidade"
accounting1.describe()