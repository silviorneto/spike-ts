class Department2 {
    private employees: string[] = []

    constructor(private id: string, public name: string) {}

    describe(this: Department2) {
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

const accounting2 = new Department2('d1', 'Account')
accounting2.describe()