enum Role1 {
    "STUDENT",
    "TEACHER",
    "WORKER"
}

class User1 {
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

class Student1 extends User1 {
    public readonly role: number = Role1.STUDENT
    private notes: number[] = []

    get allNotes(): number[] {
        if (this.notes.length < 0) {
            throw new Error("There is no note")
        }
        return this.notes
    } 
    
    set allNotes(notes: number[]) {
        notes.forEach((note, idx) => {
            if (note < 0 && note > 10) {
                throw new Error(`Index ${idx}: Note ${note} must be less than 10 and more than 0`)
            }
            this.notes.push(note)
        })
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

class Teacher1 extends User1 {
    public readonly role: number = Role1.TEACHER
    public students: Student1[] = []

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
 
const s2 = new Student1("Silvio", "Romano", 12345)
s2.describe()
s2.allNotes = [9]
console.log('notes >>>> ', s2.allNotes)


const t2 = new Teacher1("Claudia", "Romano")
t2.students.push(s2)
t2.describe()