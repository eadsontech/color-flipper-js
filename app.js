const colors = ["green", "red", "rgba(133, 122, 200", "#f15025"];

const btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number between 0 - 3
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return (Math.floor(Math.random() * colors.length));
}


// Copyright date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
