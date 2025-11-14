// 2.
// შექმენი input და button:   input-ში მომხმარებელი ჩაწერს ფერს და button ღილაკზე დაწკაპების
// შემდეგ body-ს background შეიცვლება ჩაწერილ ფერად (ფერები რომლის ჩაწერაც შეუძლია: red,
// blue, green, black, white) თუ სხვა ფერი ჩაწერა, გამოუტანე შეტყობინება alert-ის საშუალებით

// body
const body = document.querySelector("body");

// input
const input = document.createElement("input");
input.setAttribute("placeholder", "Enter Color");

// button
const button = document.createElement("button");
button.textContent = "Click me";

// checkBackgroundColors container
const checkBackgroundColors = document.querySelector(".checkBackgroundColors");
checkBackgroundColors.append(input, button);

// colors
const colors = ["red", "blue", "green", "black", "white"];

button.addEventListener("click", function(){
    for(let i of colors){
        if(input.value === i){
            body.style.backgroundColor = i;
        }
    }
    input.value = ""
});
