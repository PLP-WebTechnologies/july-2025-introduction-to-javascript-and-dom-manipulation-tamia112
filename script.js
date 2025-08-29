
let userName = "Tamia";
let userAge = 20;

if (userAge >= 18) {
    console.log(userName + " is an adult.");
} else {
    console.log(userName + " is a minor.");
}


function greet(name) {
    return "Hello, " + name + "!";
}

function sum(a, b) {
    return a + b;
}


let fruits = ["Apple", "Banana", "Cherry"];


for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit " + (i + 1) + ": " + fruits[i]);
}


let count = 0;
while (count < 3) {
    console.log("Count is " + count);
    count++;
}


const output = document.getElementById("output");
const header = document.getElementById("main-header");
const fruitList = document.getElementById("fruit-list");
const btnGreet = document.getElementById("btn-greet");
const btnCalculate = document.getElementById("btn-calculate");


header.textContent = "Welcome to the JavaScript Project";


btnGreet.addEventListener("click", function() {
    output.textContent = greet(userName);
});


btnCalculate.addEventListener("click", function() {
    output.textContent = "Sum of 5 + 10 is " + sum(5, 10);
});


for (let fruit of fruits) {
    let li = document.createElement("li");
    li.textContent = fruit;
    fruitList.appendChild(li);
}
