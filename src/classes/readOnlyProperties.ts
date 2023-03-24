class Department3 {
    private employees: string[] = []

    constructor(private readonly id: string, public name: string) {}

    describe(this: Department3) {
        // this.id = "id2" // ERRO
        console.log(`Department (${this.id}): ${this.name}`)
    }

    addEmployee(emp: string) {
        this.employees.push(emp)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const acc3 = new Department3('d1', 'Account')
// acc3.id = 'd2' // ERRO
acc3.describe()