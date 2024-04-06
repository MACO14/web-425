"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let myName = new Person("Mackenzie", "Lubben-Ortiz");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
