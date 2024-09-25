"use strict";
function Age(person) {
    if (person.age < 18) {
        console.log("Adult");
    }
    else {
        console.log("Minor");
    }
}
const person1 = { name: "Alice", age: 20 };
const person2 = { name: "Bob", age: 15 };
Age(person1);
Age(person2);
function TeacherAge(teacher) {
    console.log(`Subjects taught by ${teacher.name}:`);
    for (let i = 0; i < teacher.subject.length; i++) {
        console.log(teacher.subject[i]);
    }
}
const teacher1 = { name: "Alice", subject: ["Math", "English", "Science"] };
const teacher2 = { name: "Bob", subject: ["Math", "English"] };
TeacherAge(teacher1);
TeacherAge(teacher2);
function ProductPrice(product) {
    console.log(`Product: ${product.name}}`);
    console.log(`quantity: ${product.quantity}`);
    if (product.quantity > 5) {
        console.log(`Price: ${product.price - product.price * 0.1}`);
    }
    else {
        console.log(`Price: ${product.price}`);
    }
}
let product1 = { name: "Computer", price: 100, quantity: 5 };
let product2 = { name: "Mobile", price: 500, quantity: 10 };
ProductPrice(product1);
ProductPrice(product2);
function Start(device) {
    if (device.start() == null) {
        console.log("Device starting with default settings");
    }
    else {
        console.log("Device is started");
    }
}
const device1 = { name: "TV", start: () => { console.log("TV starting with default settings"); } };
const device2 = { name: "Printer", start: () => { console.log("Printer starting with default settings"); } };
Start(device1);
Start(device2);
