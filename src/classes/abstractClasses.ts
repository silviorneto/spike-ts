abstract class Depart {
    protected employees: string[] = []
    constructor(protected readonly id: string, public leader: string) {}

    abstract describe(this: Depart): void
    
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    
    printEmployeeInformation() {
      console.log("Quantidade de funcionários: ", this.employees.length);
      console.log("Lista de funcionários", this.employees);
    }
}

class ITDep extends Depart {
    constructor(id: string, leader: string){
        super(id, leader)
    }

    describe() {
        console.log(`IT: ${this.id} - Chief: ${this.leader}`)
    }   
}

const it = new ITDep('a1', 'Silvio') 
it.addEmployee('Renato')
it.printEmployeeInformation()
it.describe()