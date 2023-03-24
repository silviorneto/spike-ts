class Department4 {
    private employees: string[] = []

    constructor(private readonly id: string, public name: string) {}

    getId(this: Department4) {
        return this.id
    }

    describe(this: Department4) {
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

class ITDepartment extends Department4 {
    admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, 'IT')
        this.admins = admins
    }   

    describe(this: ITDepartment) {
        console.log(`Department (${this.getId()}): ${this.name}`)
        console.log(`Admins: ${this.admins}`)
    }  
}

class AccountDepartment extends Department4 {
    private reports: string[] = []

    constructor(id: string) {
        super(id, 'Accounting')
    }

    addReports(this: AccountDepartment, report: string) {
        this.reports.push(report)
    }

    getReports(this: AccountDepartment) {
        return this.reports
    }

    describe(this: AccountDepartment) {
        console.log(`Department (${this.getId()}): ${this.name}`)
        console.log(`Reports: [${this.getReports()}]`)

    }
}

const it = new ITDepartment('d1', ['Silvio'])
it.describe()

const account = new AccountDepartment('d2')
account.addReports('SHOOOOOW!!!')
account.describe()