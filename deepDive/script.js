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