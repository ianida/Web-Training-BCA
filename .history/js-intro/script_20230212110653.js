// console.log("First Program");

// console.log(document.body.style.background="red");

// window.setTimeout(function () {
//     document.body.style.background = "blue";
// },5000);

// window.setInterval(function () {
//     document.body.innerHTML=`<h1>${new Date()}</h1>`
// },1000);

// const result = window.prompt("What is your name?");
// console.log(result);

//JS Selector
const title = document.getElementsByClassName("red");
title[0].style.fontSize = "60px";

const firstList = document.querySelectorAll(".red");

firstList.forEach(function (item) {
    item.style.color='purple';
})

//Events
/*document.addEventListener("click",function() {
    console.log("You pressed clicked");
}); */

const button=document.querySelector('button');

button.addEventListener("click",function(event) {
    console.log(event.target);
    document.body.style.background="green";
});