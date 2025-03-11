function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value;

    // creating elements
    const listItem = document.createElement("div");
    const label = document.createElement("label");
    const checkBox = document.createElement("input");

    // adding functionality
    label.textContent = taskText;
    checkBox.type = "checkbox";
    checkBox.onclick = function() {
        label.classList.toggle("completed");
    }

    // appending the elements
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    taskList.appendChild(listItem);
    taskInput.value = "";
}

document.getElementById("addButton").addEventListener("click", addTask);

function editName() {
    let header = document.querySelector(".header");
    let name = document.querySelector("#name");
    header.textContent = `Good Evening, ${name.value}`;
}

document.getElementById("editButton").addEventListener("click", editName);

let time = document.getElementById("time");
// declare a built object from JS
let date = new Date();
// time.textContent = date;
console.log(date.getHours());
console.log(date.getMinutes());
time.textContent = `${date.getHours()}:${date.getMinutes()}`;

const quotes = [
    "Time is gold",
    "Time is money",
    "Time is everything",
    "Time is short"
];

let randomNumber = Math.random() * quotes.length;
let newNumber = Math.floor(randomNumber); // 0 - 3
document.getElementById("randomQuote").textContent = quotes[newNumber];