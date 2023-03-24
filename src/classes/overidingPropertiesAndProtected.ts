enum Role {
    "STUDENT",
    "TEACHER",
    "WORKER"
}

class User {
    protected subjects: string[] = []
    constructor(
        protected readonly firstname: string, 
        protected readonly surname: string
    ) {}

    describe() {
        console.log(`User: ${this.firstname} ${this.surname}`)
    }

    addClass(subject: string) {
        this.subjects.push(subject)
    }

    removeClass(subject: string) {
        this.subjects = this.subjects.filter( s => s === subject)
    }

    getName() {
        return this.firstname + " " + this.surname
    }

    toString() {
        return this.firstname + " " + this.surname
    }
}

class Student extends User {
    public readonly role: number = Role.STUDENT
    private notes: number[] = []

    get lastNote() {
        if (this.notes.length > 0) {
            return this.notes[-1]
        } 
        throw new Error("Nenhuma nota lançada")
    }

    constructor(
        firstname: string, 
        surname: string,
        public readonly registration: number
    ) {
        super(firstname, surname)
    }

    describe() {
        console.log(`Student: ${this.firstname} ${this.surname} - (${this.registration})`)
    }
}

class Teacher extends User {
    public readonly role: number = Role.TEACHER
    public students: Student[] = []

    constructor(
        firstname: string, 
        surname: string, 
    ) {
        super(firstname, surname)
    }

    describe() {
        console.log(`Teacher: ${this.firstname} ${this.surname} - ${this.students}`)
    }
}
 
const s1 = new Student("Silvio", "Romano", 12345)
s1.describe()
console.log(s1.lastNote)


const t1 = new Teacher("Claudia", "Romano")
t1.students.push(s1)
t1.describe()