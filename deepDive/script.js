// getElementById
document.getElementById("hello").style.backgroundColor = "red";

// getElementsByClassName
let things = document.getElementsByClassName("things");
console.log(things);

// this will not work and will cause a type error
// things.style.backgroundColor = "yellow";

for(let i = 0; i < things.length; i++){
    things[i].style.backgroundColor = "yellow";
}

// querySelector
let sample = document.querySelector("#sample");
sample.style.fontSize = "50px";

// gets the first occurence of class classSample and applies the style to it
let classSample = document.querySelector(".classSample");
classSample.style.fontSize = "50px";

// querySelectorAll
let classSampleArray = document.querySelectorAll(".classSample");
for(let i = 0; i < classSampleArray.length; i++){
    classSampleArray[i].style.fontSize = "50px";
}

// changing the element's text
let journal = document.getElementById("journal");
journal.textContent = "I updated the journal text content";

// innerHTML - reads both the text and the markup language
let myList = document.getElementById("my-list");
console.log(myList.innerHTML);
// myList.innerHTML = myList.innerHTML + "<li>Task 4</li>";
myList.innerHTML += "<li>Task 4</li>";
// myList.innerHTML += "Task 5";

// textContent - it ignores all HTML tags and returns only the text
// myList.textContent += "<li>Task 5</li>";

// innerText - it returns the text as it appears on the screen
// myList.innerText += "<li>Task 6</li>";

let navigation = document.querySelector("nav");
console.log(navigation.innerHTML);
console.log(navigation.innerText);
console.log(navigation.textContent);

let orange = document.getElementById("target");
orange.classList.add("orange");

document.getElementById("target2").classList.remove("orange");

// this will turn the text into red
document.getElementById("firsth2").classList.toggle("red");

let second = document.getElementById("secondh2");
second.classList.toggle("red");

let league = document.getElementById("league");

const superHeroes = [
    "Batman",
    "Superman",
    "Wonder Woman",
    "The Flash"
];

for(let i = 0; i < superHeroes.length; i++){
    let newElement = document.createElement("li");
    newElement.textContent = superHeroes[i];
    league.appendChild(newElement);
}

for(let i = 0; i < superHeroes.length; i++){
    league.innerHTML += `<li>${superHeroes[i]}</li>`
}

// Coding challenge
let justiceLeagueUl = document.getElementById("justiceLeague");

const justiceLeague = [
    {
        name: "Superman",
        superpower: "Super strength"
    },
    {
        name: "Batman",
        superpower: "Super rich"
    },
    {
        name: "Wonder Woman",
        superpower: "Super lasso"
    },
    {
        name: "The Flash",
        superpower: "Super speed"
    },
    {
        name: "Green Lantern",
        superpower: "Super ring"
    }
];

function toggleSuperpower(ele) {
    ele.classList.toggle("superpower");
}

for(let i = 0; i < justiceLeague.length; i++){
    let newHero = document.createElement("li");
    // this div will hold the super power text and button to show or hide it
    let newDiv = document.createElement("div");
    let newSuperPower = document.createElement("span");
    let toggleButton = document.createElement("button");

    toggleButton.textContent = "ss";
    newHero.textContent = justiceLeague[i].name;
    newSuperPower.textContent = `Super Power: ${justiceLeague[i].superpower}`;
    newSuperPower.classList.add("superpower");
    
    // we need to have this format so that it will invoke the function correctly
    toggleButton.addEventListener('click', function() {
        toggleSuperpower(newSuperPower);
    });

    // structure the elements
    newDiv.appendChild(newSuperPower);
    newDiv.appendChild(toggleButton);
    newHero.appendChild(newDiv);
    justiceLeagueUl.appendChild(newHero);
}