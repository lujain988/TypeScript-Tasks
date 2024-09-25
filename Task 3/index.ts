//1
interface Person {
  name: string;
  age: number;
}
function Age(person: Person) {
  if (person.age < 18) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }
}
const person1: Person = { name: "Alice", age: 20 };
const person2: Person = { name: "Bob", age: 15 };

Age(person1);
Age(person2);

//2
interface Teacher {
  name: string;
  subject: string[];
}

function TeacherAge(teacher: Teacher) {
  console.log(`Subjects taught by ${teacher.name}:`);

  for (let i = 0; i < teacher.subject.length; i++) {
    console.log(teacher.subject[i]);
  }
}
const teacher1: Teacher = {
  name: "Alice",
  subject: ["Math", "English", "Science"],
};
const teacher2: Teacher = { name: "Bob", subject: ["Math", "English"] };

TeacherAge(teacher1);
TeacherAge(teacher2);

//3
interface Product {
  name: string;
  price: number;
  quantity: number;
}

function ProductPrice(product: Product) {
  console.log(`Product: ${product.name}}`);
  console.log(`quantity: ${product.quantity}`);
  if (product.quantity > 5) {
    console.log(`Price: ${product.price - product.price * 0.1}`);
  } else {
    console.log(`Price: ${product.price}`);
  }
}
let product1: Product = { name: "Computer", price: 100, quantity: 5 };
let product2: Product = { name: "Mobile", price: 500, quantity: 10 };
ProductPrice(product1);
ProductPrice(product2);

//4
interface Device {
  name: string;
  start(): void;
}
function Start(device: Device) {
  if (device.start() == null) {
    console.log("Device starting with default settings");
  } else {
    console.log("Device is started");
  }
}
const device1: Device = {
  name: "TV",
  start: () => {
    console.log("TV starting with default settings");
  },
};
const device2: Device = {
  name: "Printer",
  start: () => {
    console.log("Printer starting with default settings");
  },
};
Start(device1);
Start(device2);
