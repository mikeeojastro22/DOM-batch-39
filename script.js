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