const person1 = {
    name: "Silvio",
    age: 36,
    hobbies: ['Cooking', 'Sports']
};

let favoriteActivities: string[]
favoriteActivities = ['Sports']

console.log(person1.name);

for (const hobby of person1.hobbies) {
    console.log(hobby.toUpperCase()) // Ys sabe que é uma string por inferência
    // console.log(hobby.map()) // Vai dar erro!!
}