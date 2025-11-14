// 3.
// შექმენი input, სადაც მომხმარებელს შესაძლებლობა ექნება შეიტანოს “:”- ით
// ერთმანეთისგან გამოყოფილი რიცხვები, average ღილაკზე დაწკაპების შემდეგ დაითვალე
// ამ რიცხვების საშუალო და გამოუტანე ეკრანზე მაგ: 1:2:3:4:5 ეკრანზე გამოიტანს 3-ს

// input
const input = document.createElement("input");
input.style.width = "400px";
input.setAttribute("placeholder", "Enter your numbers and use ':' between them");

// button
const averageBtn = document.createElement("button");
averageBtn.textContent = "Ckeck";

// show result
const result = document.createElement("div");

// container
const container = document.querySelector(".container");
container.append(input, averageBtn, result);

averageBtn.addEventListener("click", function(){
    if(!input.value.includes(':')) {
        result.textContent = "Please use ':' between numbers";
        return;
    };

    const numberArr = input.value.split(":").map(Number);

    let sum = 0;
    for(let i = 0; i < numberArr.length; i++) {
        sum += numberArr[i];
    }

    const average = sum / numberArr.length;

    result.textContent = average;
    return result;
});
