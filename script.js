console.log("Hello World!!");

// document - translated object of the HTML 

// this will print the object
// console.log(document.getElementById("hello"));

document.getElementById("hello").style.backgroundColor = "red";

let pTags = document.getElementsByTagName("p");
console.log(pTags);
// <p>This is my second p tag</p> - change the background color of this element to yellow
pTags[1].style.backgroundColor = "yellow";

document.querySelector("div").style.backgroundColor = "purple";
document.querySelector("#second").style.backgroundColor = "orange";
document.querySelector(".third").style.backgroundColor = "pink";

let sTags = document.querySelectorAll(".sample");
console.log(sTags);
// <span class="sample">This is my third span</span> - change the background color of this element to green
sTags[2].style.backgroundColor = "green";

// this will also work
// document.querySelectorAll(".sample")[2].style.backgroundColor = "green";

let about = document.getElementById("about");
// creating a new div
let newDiv = document.createElement("div");
// creating a new button
let button = document.createElement("button");
button.textContent = "Alert!";
button.style.color = "black";
button.style.border = "1px";
button.style.margin = "10px";
button.style.padding = "15px 30px";
button.style.borderRadius = "15px";
button.style.backgroundColor = "orange";

// putting the button inside a div
newDiv.appendChild(button);
// putting the div inside our about div
about.appendChild(newDiv);

function sayHey() {
    alert("Hey!");
}
// first parameter - action enclosed in quotation/user action
// second parameter - triggered function
button.addEventListener('click', sayHey);

let counter = document.getElementById("counter");
let increment = document.getElementById("increment");

function incrementOne() {
    // This is adding number to string
    // counter.textContent += 1;

    // convert string to a number
    let parseToNumber = parseInt(counter.textContent);
    // parseToNumber = parseToNumber + 1;
    parseToNumber += 1;
    // give back new value to textContent
    counter.textContent = parseToNumber;
}

increment.addEventListener("click", incrementOne);