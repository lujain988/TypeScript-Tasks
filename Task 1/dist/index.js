"use strict";
let num = 5;
if (num % 2 === 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
let products = [
    { name: "iPhone", price: 999 },
    { name: "MacBook", price: 1299 },
    { name: "iPad", price: 799 },
    { name: "AirPods", price: 199 },
    { name: "Headphones", price: 299 },
];
let expensiveProducts = products.filter(product => product.price > 1000);
console.log(expensiveProducts);
let users = [
    { name: "John", age: 25, isAdmin: true },
    { name: "Jane", age: 30, isAdmin: false },
    { name: "Bob", age: 35, isAdmin: true },
    { name: "Alice", age: 40, isAdmin: false },
];
let adminUsers = users.filter(user => user.isAdmin);
let oldestAdmin = adminUsers.sort((a, b) => b.age - a.age)[0];
console.log(oldestAdmin.name);
