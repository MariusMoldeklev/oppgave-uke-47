
// const bodyTheme = document.querySelector("#body_theme");

// let lightTheme = true;
// function changeTheme () {
//     if (lightTheme) {
//         bodyTheme.classList= "task_one_dark";
//         lightTheme= false;
//     }
//     else{
//         bodyTheme.classList="task_one_light";
//         lightTheme= true;
//     }
// }

// const bubbleToggle = document.querySelector(".btn")

// function toggleOnOff() {
//     const body = document.querySelector("body");
//     if (bubbleToggle.innerHTML === "bubble") {
//         bubbleToggle.innerHTML = "nobubble";
//     } else {
//         bubbleToggle.innerHTML = "bubble";
//     }
//     bubbleToggle.classList.toggle("theme_switch")
//     body.classList.toggle("bubbleTheme");
// }

const bubbleToggle = document.querySelector("#btn");

let currentState = 0; // Initial state index

function toggleOnOff() {
    const body = document.body;

    const classes = ["☀️", "🌤️","🌥️","🌧️", "🌙"]; 
    const btnClasses =["sun","sunCloud", "sunBigCloud", "rain","moon"];

    currentState = (currentState + 1) % classes.length; // Update the state index

    bubbleToggle.innerHTML = classes[currentState];
    body.className = ""; // Remove all existing classes from body
    bubbleToggle.className="";
    bubbleToggle.classList.add(btnClasses[currentState]);
    body.classList.add(classes[currentState]); // Add the current class to body
    
}
//☀️🌤️🌥️☁️🌧️🌙