/*
PLAN

Goal: Create a simple calculator website 

Steps:
    1. Create the output space and buttons in the html document
    2. Format the space and buttons to align over the image
    3. Create a "Button" class has:
        value (string): e.g. "9" or "="
        onClick = function(value)
    4. Create the "Output" class has:
        currOutput (string): e.g. "4+2"
*/

// Add event listeners to all buttons

// document.querySelectorAll("button").forEach(elem => elem.addEventListener("click", console.log(elem.value)));

let buttons = document.querySelectorAll("button")

Array.from(buttons).forEach(element => element.addEventListener('click', addValueToOutput)) // Question: Why dont I need to pass in argument as it takes click as a parameter?

function addValueToOutput(click){
    console.log(click.target.value)
}

// const contestants = document.querySelectorAll('.contestant')

// Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

// function checkForRose(click){
// 	if(click.target.classList.contains('rose')){
// 		document.querySelector('#nikki').classList.toggle('hidden')
// 	}else{
// 		alert("Wrong!");
// 	}
// }
