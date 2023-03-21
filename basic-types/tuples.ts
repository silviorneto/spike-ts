let person2: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: "Silvio",
    age: 36,
    hobbies: ['Cooking', 'Sports'],
    role: [1, "admin"] 
};

// O Ts não consegue impedir esse push, pois pro JS é um array comum
// person2.role.push("author") 

//porém se tentar substituir por um array com length > do que o estabelecido, ele acusa o erro
// person2.role = [1, "author", "admin"] // vai dar erro

// person2.role = [] // vai dar erro 

person2.role = [2, "author"]

console.log(person2.role)