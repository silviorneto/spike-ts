type TCombinable = string | number

function add(n1: TCombinable, n2: TCombinable) {
    // Esse if seria o type guard
    // pois ele garante que o meu código funcione
    // independente de qual dos tipos será recebido
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString()
    }
    return n1 + n2
}

type TEmployee = {
    name: string;
    startDate: Date;
}

type TAdmin = {
    name: string;
    privileges: string[];
}

type TUnknownEmployee = TEmployee | TAdmin

function printEmployeeInfo(emp: TUnknownEmployee) {
    console.log(emp.name)
    
    if ('privileges' in emp) {
        console.log('Privileges :: ', emp.privileges)
    }
    
    if ('startDate' in emp) {
        console.log('startDate :: ', emp.startDate)
    }
}

let e1: TEmployee
let e2: TAdmin

e1 = {
    name: 'Silvio',
    startDate: new Date()
}

e2 = {
    name: 'Neto',
    privileges: ['superuser']
}

printEmployeeInfo(e1)
printEmployeeInfo(e2)
printEmployeeInfo({name: 'Manu', startDate: new Date()})

class Car {
    drive() {
        console.log('driving...')
    }
}

class Truck {
    drive() {
        console.log('driving...')
    }

    loadCargo(amount: number) {
        console.log('loading cargo...', amount)
    }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
    
    // if ('loadCargo' in vehicle) {
    //     vehicle.loadCargo(1000)
    // }

    // Outra alternativa, talvez mais elegante, disponível também no Vanilla Js, o qual
    // pois entende que o objeto é baseado na classe Truck como uma função construtora.
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000)
    }

    // o exemplo acima não funcionaria se Truck fosse uma interface, pois a interface não gera nenhum 
    // JS. Só existe no TS.
}

useVehicle(v1)
useVehicle(v2)


