abstract class Departm {
    protected employees: string[] = []
    constructor(protected readonly id: string, public leader: string) {}

    abstract describe(this: Departm): void
    
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    
    printEmployeeInformation() {
      console.log("Quantidade de funcionários: ", this.employees.length);
      console.log("Lista de funcionários", this.employees);
    }
}

class ITDepartm extends Departm {
    private static IT: ITDepartm
    
    private constructor(id: string, leader: string){
        super(id, leader)
    }

    static getITInstance() {
        if (ITDepartm.IT) {
            return ITDepartm.IT
        }

        return new ITDepartm('a1', 'Silvio')
    }

    describe() {
        console.log(`IT: ${this.id} - Chief: ${this.leader}`)
    }   
}

const tt1 = ITDepartm.getITInstance()
const tt2 = ITDepartm.getITInstance()

console.log(tt1, tt2)