// Identify if a Number is Even or Odd without function

let num : number = 5;

if (num % 2 === 0) {
    console.log("Even");
    
} else {
    console.log("Odd");
}


//Filter Expensive Products from an Array 

let products = [
    {name: "iPhone", price: 999},
    {name: "MacBook", price: 1299},
    {name: "iPad", price: 799},
    {name: "AirPods", price: 199},
    {name: "Headphones", price: 299},
];

let expensiveProducts = products.filter(product => product.price > 1000);

console.log(expensiveProducts);

////Find the Oldest Admin

let users = [
    {name: "John", age: 25, isAdmin: true},
    {name: "Jane", age: 30, isAdmin: false},
    {name: "Bob", age: 35, isAdmin: true},
    {name: "Alice", age: 40, isAdmin: false},
];

let oldestAdmin = users.sort((a, b) => a.age - b.age)[0];

console.log(oldestAdmin.name);

