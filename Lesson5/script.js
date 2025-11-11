// 1.
// შექმენი <button> და <div> ელემენტები და მიანიჭეთ საკუთარი უნიკალური id <div> - ში ჩაწერე
// პატარა random ტექსტი ღილაკზე დაჭერის შემთხვევაში დამალე <div> ელემენტი

const bd = document.querySelector("body");
const btn = document.createElement("button");
const dv = document.createElement("div");

bd.append(dv, btn);

dv.setAttribute("id", "div_id");
btn.setAttribute("id", "btn_id");

dv.textContent = "This text should be show or hide";
btn.textContent = "Click me";

let clicked_btn = 0;
btn.addEventListener("click", function(){
    dv.style.display = "none";

    if(clicked_btn % 2 === 0) {

        dv.style.display = "none";
        clicked_btn++;

    } else if(clicked_btn % 2 === 1) {

        dv.style.display = "block";
        clicked_btn++;

    } else {
        console.error(error);
    }
});



// 2.
// შექმენი შემდეგი სტრუქტურა JS -ის გამოყენებით და დაამატე DOM-ში:
// <div id=”card”>
//   <h2>Gandalf</h2>
//   <a href=”#”>Go to profile</a>
// </div>

const my_a = document.createElement("a");
const my_h2 = document.createElement("h2");
const my_div = document.createElement("div");
const my_body = document.querySelector("body");

my_a.setAttribute("href", "#");
my_a.textContent = "Go to profile";
my_h2.textContent = "Gandalf";
my_div.setAttribute("id", "card");

my_div.append(my_h2, my_a);
my_body.appendChild(my_div);



// 3.
// შექმენი quiz თამაში დაწერე რამდენიმე მოკლე შეკითხვა თავისი სავარაუდო პასუხებით სწორ პასუხზე დაჭერის
// შემთხვევაში გაამწვანე პასუხი, არასწორი პასუხის შემთხვევაში გააწითლე. ბონუს დავალება: გამოიტანე ეკრანზე
// ქულების რაოდენობა ➔ სწორი პასუხის შემთხვევაში დაამატე 1 ქულა ➔ არასწორის შემთხვევაში უცვლელი რჩება

const title = document.querySelector("#title");
title.textContent = "JS quiz";
title.style.textAlign = "center";
title.style.color = "red";

const question1 = document.querySelector("#question1");
question1.textContent = "1) რომელი აღწერს სწორად hoisting-ის ქცევას JavaScript-ში?";

const question2 = document.querySelector("#question2");
question2.textContent = "2) რა განსხვავებაა null და undefined მნიშვნელობებს შორის?";

const question3 = document.querySelector("#question3");
question3.textContent = "3) რას ნიშნავს “callback function” JavaScript-ში?";

const pt = document.querySelector("#point")
let point = 0;
pt.textContent = `Your point is ${point}`;


const allAnswer1 = document.querySelectorAll(".answer1");
const arrAnswers1 = [
    "A) ცვლადები და ფუნქციები სრულად ინიციალიზდებიან კოდის გაშვებამდე",
    "B) hoisting საერთოდ არ არსებობს ES6-ის შემდეგ",
    "C) მხოლოდ let და const ცვლადები ექვემდებარებიან hoisting-ს",
    "D) ცვლადების და ფუნქციების დეკლარაციები გადმოინაცვლებენ სკოუპის დასაწყისში, მაგრამ ინიციალიზაცია არა"
];
allAnswer1.forEach((answer1, index1) => {
    answer1.textContent = arrAnswers1[index1];
    answer1.style.border = "1px solid black";
    answer1.style.padding = "10px";
    answer1.style.cursor = "pointer";

    const correctIndex1 = 3;
    answer1.addEventListener("click", function(){
        if (answer1.style.backgroundColor) return;

        if(index1 === correctIndex1){
            this.style.color = "white";
            this.style.backgroundColor = "green";

            point++;
            pt.textContent = `Your point is ${point}`;
        } else {
            this.style.color = "white";
            this.style.backgroundColor = "red";
        }
    });
});


const allAnswer2 = document.querySelectorAll(".answer2");
const arrAnswers2 = [
    "A) განსხვავება არ არის, ორივე ერთნაირია",
    "B) null გამოიყენება მხოლოდ სტრინგებისთვის ",
    "C) undefined ნიშნავს რომ მნიშვნელობა არ მიენიჭა, ხოლო null არის განზრახ ცარიელი მნიშვნელობა",
    "D) ორივე ავტომატურად გარდაიქმნება 0-ად"
];
allAnswer2.forEach((answer2, index2) => {
    answer2.textContent = arrAnswers2[index2];
    answer2.style.border = "1px solid black";
    answer2.style.padding = "10px";
    answer2.style.cursor = "pointer";

    const correctIndex2 = 2;
    answer2.addEventListener("click", function(){
        if (answer2.style.backgroundColor) return;

        if(index2 === correctIndex2){
            this.style.color = "white";
            this.style.backgroundColor = "green";

            point++;
            pt.textContent = `Your point is ${point}`;
        } else {
            this.style.color = "white";
            this.style.backgroundColor = "red";
        }
    });
});


const allAnswer3 = document.querySelectorAll(".answer3");
const arrAnswers3 = [
    "A) ფუნქცია, რომელიც მხოლოდ ერთხელ შეიძლება შესრულდეს",
    "B) ფუნქცია, რომელიც გადაიცემა სხვა ფუნქციას არგუმენტად და გამოიძახება გარკვეულ მომენტში",
    "C) ფუნქცია, რომელიც აბრუნებს სხვა ფუნქციას",
    "D) ფუნქცია, რომელიც იყენებს return-ს მხოლოდ ასინქრონულად"
];
allAnswer3.forEach((answer3, index3) => {
    answer3.textContent = arrAnswers3[index3];
    answer3.style.border = "1px solid black";
    answer3.style.padding = "10px";
    answer3.style.cursor = "pointer";

    const correctIndex3 = 1;
    answer3.addEventListener("click", function(){
        if (answer3.style.backgroundColor) return;

        if(index3 === correctIndex3){
            this.style.color = "white";
            this.style.backgroundColor = "green";

            point++;
            pt.textContent = `Your point is ${point}`;
        } else {
            this.style.color = "white";
            this.style.backgroundColor = "red";
        }
    });
});
