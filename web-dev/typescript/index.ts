function greeet(firstName: string) {
    console.log(`Hello ${firstName}`);
}

greeet("Seven");

function sum(a: number, b: number){
    let c = a + b +10;
    console.log(c);
}

sum(10, 20);

let a = 10; //type inference (automatically infers the type of a as number)
let b = "Seven"; //type inference (automatically infers the type of b as string)

function first_element(arr: number[]): number | null | undefined {
    return arr.length > 0 ? arr[0] : null; //arr[0] could be undefined if the array is empty, so we return null in that case but typescript is not smart enough to detect if/else statement and will infer the return type as number | null | undefined
}

let firstElement : number | null | undefined = first_element([]);  // possible number || null || undefined

//but

function first_element1(arr: number[]): number | null {
    return arr.length > 0 ? arr[0] ?? null : null;
}

//now firstElement is of type number | null

let firstElement1 : number | null = first_element1([]);  // possible number || null
console.log(firstElement1);

console.log(first_element([1, 2, 3, 4]));

function delayedFunction(callback: () => void, delay: number): void {
    setTimeout(callback, delay);
}

delayedFunction(() => {
    console.log("This is a delayed function");
}, 2000);


interface User {
    name: string;
    email: string;
    password: string;
    age: number;
}

// import express from "express";
//@types/express is a package that provides type definitions for express, which allows us to use express with TypeScript and get type checking and autocompletion in our code editor.
// const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });


// app.get('/signup', (req, res) => {
//     const body: User = req.body;
//     res.send({username: body.email});
// });

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });


let user: User = {
    name: "Seven",
    email: "seven@gmail.com",
    password: "password",
    age: 20
};

function isLegal(user: User): boolean {
    return user.age >= 18 ? true : false;
}

console.log(isLegal(user));

//interface
interface Person {
    name: string;
    age: number;
    email: string;
    greet: () => void;
}

class Student implements Person {
    name: string;
    age: number;
    email: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. You can reach me at ${this.email}`);
    }
}

let student1 = new Student("Seven", 20, "seven@gmail.com");
student1.greet();

//types
type PersonType = {
    name: string;
    age: number;
    email: string;
    greet: () => void;
}

//same as interface, can be implemented by a class + has some differences like can be used to create union types, intersection types, etc.

//union type
type Pincode = string | number;
//intersection type
type Address = {
    street: string;
    city: string;
    state: string;
    pincode: Pincode;
}

type PersonWithAddress = PersonType & Address;

let personWithAddress: PersonWithAddress = {
    name: "Seven",
    age: 20,
    email: "seven@gmail.com",
    greet: () => {
        console.log(`Hello, my name is ${personWithAddress.name} and I am ${personWithAddress.age} years old. You can reach me at ${personWithAddress.email}`);
    },
    street: "123 Main St",
    city: "New York",
    state: "NY",
    pincode: 10001
};

personWithAddress.greet();