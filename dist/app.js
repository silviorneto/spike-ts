"use strict";
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data = this.data.filter(i => i !== item);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('oi');
textStorage.addItem('tudo');
textStorage.addItem('bem');
textStorage.addItem('?');
console.log(textStorage.getItems());
textStorage.removeItem('?');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(5);
numberStorage.addItem(10);
numberStorage.addItem(59);
console.log(numberStorage.getItems());
const multipleDataStorage = new DataStorage();
multipleDataStorage.addItem(10);
multipleDataStorage.addItem('oi');
console.log(multipleDataStorage.getItems());
class ObjectStorage {
    constructor() {
        this.data = [];
    }
    addItem(...item) {
        this.data = this.data.concat(item);
    }
    removeItem(id) {
        this.data = this.data.filter(i => i.id !== id);
    }
    getItems() {
        return [...this.data];
    }
}
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
const silvio = new Person(1, 'Silvio', 23);
const claudia = new Person(2, 'Claudia', 21);
const uri = new Person(3, 'Uri', 22);
const personStorage = new ObjectStorage();
personStorage.addItem(silvio, claudia, uri);
console.log(personStorage.getItems());
personStorage.removeItem(silvio.id);
console.log(personStorage.getItems());
//# sourceMappingURL=app.js.map