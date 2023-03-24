class StudentService {
    static classYear = 2023

    static createStudent(name: string) {
        return {studentName: name}
    }
}

console.log(StudentService.classYear)
console.log(StudentService.createStudent('Silvio'))