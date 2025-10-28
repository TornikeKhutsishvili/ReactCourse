// 1.
// დაწერე ფუნქცია, რომელიც მიიღებს a და b პარამეტრებს და დააბრუნებს ტექსტს “ტოლია”
// თუ a უდრის b-ს, ხოლო წინააღმდეგ შემთხვევაში, დააბრუნებს “არ არის ტოლი” გაითვალისწინე,
// რომ a და b ყოველთვის ერთი და იგივე ტიპის არ არის

function compareNumber(a,b) {
    if (a === b) {
        return `a: ${a} is equal b: ${b}`
    } else if (a !== b) {
        return `a: ${a} is not equal b: ${b}`
    } else {
        console.error(error.message);
    }
}

console.log(compareNumber(3,3));
console.log(compareNumber(4,'4'));





// 2.
// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს ტემპერატურას ფარენჰეიტებში და დააბრუნებს
// ტემპერატურას ცელსიუსში თუ პარამეტრი არ არის რიცხვითი მონაცემი დააბრუნე - false

function fahrenheit_to_celsius(fahrenheit = 0) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    if (typeof fahrenheit !== "number") {
        return false;
    } else {
        return celsius;
    }
}

console.log(fahrenheit_to_celsius(32));
console.log(fahrenheit_to_celsius(96));
console.log(fahrenheit_to_celsius('32'));





// 3.
// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს a (პირველი რიცხვი), b (მეორე რიცხვი) და
// operation (+, -, *, /) და დააბრუნებს ახალ მნიშვნელობას, რომელიც მიიღება ამ ორ რიცხვზე
// operation ცვლადში განსაზღვრული ოპერაციით თუ a და b არ არიან რიცხვები, ან თუ
// operation ცვლადში არის უცნობი, ოპერაცია დააბრუნე - false

const operation = ["+", "-", "*", "/"];
function calculate(a, b, operation) {

    if (typeof a !== "number" || typeof b !== "number") {
        return false;
    }

    if (operation === "+") {
        return a + b;
    } else if (operation === "-") {
        return a - b;
    } else if (operation === "*") {
        return a * b;
    } else if (operation === "/") {
        if (b === 0) {
            return false;
        }
        return a / b;
    } else {
        return false;
    }
}

console.log(calculate(10, 2, "+"));
console.log(calculate(10, 2, "-"));
console.log(calculate(10, 2, "*"));
console.log(calculate(10, 2, "/"));
console.log(calculate(10, "2", "+"));
console.log(calculate(10, "2", "/"));
console.log(calculate(10, 2, "%"));
console.log(calculate(10, 2, "**"));