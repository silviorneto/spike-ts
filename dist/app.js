"use strict";
class CPerson {
    constructor(name) {
        this.name = name;
    }
}
class CPerson2 {
    constructor(name, age, address = '') {
        this.name = name;
        if (age) {
            this.age = age;
        }
        if (address) {
            this.address = address;
        }
    }
}
let tu = new CPerson2('Tu');
console.log(".... tu >>> ", tu);
//# sourceMappingURL=app.js.map