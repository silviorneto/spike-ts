interface Bird {
    kind: 'bird'
    flyingSpeed: number
}

interface Horse {
    kind: 'horse'
    runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal (animal: Animal) {
    // e agora, como eu faço se eu tenho dois métodos diferentes?
    // posso fazer if... metodo in objeto, como anteriormente, mas daí cada novo animal vai precisar
    // de um check específico
    // instanceof não funciona pois estamos falando em interfaces e não classes

    // posso criar um atributo em comum para que eu consiga diferenciá-los (kind, no exemplo acima)
    let speed: number
    switch(animal.kind) {
        case 'bird':
            speed = animal.flyingSpeed 
            break 
        case 'horse':
            speed = animal.runningSpeed 
    }

    console.log('Moving at speed: ' + speed)
}

let h1: Horse
h1 = {
    runningSpeed: 20,
    kind: 'horse'
} 

moveAnimal(h1)

let b1: Bird
b1 = {
    flyingSpeed: 50,
    kind: "bird"
}

moveAnimal(b1)

// O próprio TS já identifica qual método você deve usar pelo tipo e te sugere
moveAnimal({kind: 'bird', flyingSpeed: 80})
