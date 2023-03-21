enum Role {
    ADMIN = 5,
    READ_ONLY,
    AUTHOR
}

let person3 = {
    name: "Silvio",
    age: 36,
    hobbies: ['Cooking', 'Sports'],
    role: Role.ADMIN
};

console.log(person3.role)