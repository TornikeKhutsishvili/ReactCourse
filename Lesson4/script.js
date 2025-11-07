"use strict";

// 1.
// დაწერე ფუნქცია, რომელიც მიიღებს სამ პარამეტრს (string, valueToReplace, valueToReplaceWith),
// ჩაანაცვლებს "valueToReplace"-ს "valueToReplaceWith" მნიშვნელობით და დააბრუნებს ახალ string-ს
// არ გამოიყენო string.replace() ფუნქცია

const replaceString = (string, valueToReplace, valueToReplaceWith) => {
    console.log(string.indexOf("dynamic"));

    const index = string.indexOf(valueToReplace);
    const start = string.slice(0, index);
    const end = string.slice(index + valueToReplace.length);

    return start + valueToReplaceWith + end;
}

console.log(
    replaceString(
        "JavaScript is a dynamic programming language",
        "dynamic",
        "just compiled"
    )
);



// 2.
// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს string ტიპის მნიშვნელობას (წინადადებას),
// მასში ყოველ სიტყვას გადაწერს დიდი ასოთი და დააბრუნებს ახალ წინადადებას

let str = "frontend development is one of the most dynamic and creative areas of web development. it focuses on everything that users see and interact with on a website or application. A frontend developer uses technologies such as HTML, CSS, and JavaScript to build responsive, visually appealing, and user-friendly interfaces. the main goal is to create smooth and intuitive user experiences across different devices and screen sizes.";

const upperCase = (str) => {
    return str.toUpperCase();
}

console.log(upperCase(str));



// ყოველი სიტყვის პირველ ასოს გადაწერს დიდ რეგისტრში და დააბრუნებს ახალ წინადადებას:

const upperCaseFirst = (str) => {
    const words = str.split(' ');
    const capitalizedWords = words.map(
        word => word.charAt(0).toUpperCase() + word.slice(1)
    );

    return capitalizedWords.join(' ');
}

console.log(upperCaseFirst(str));



// 3.
// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს მომხმარებლების მასივს და დააბრუნებს დალაგებულ მასივს
// მომხმარებლების ასაკის ზრდადობის მიხედვით მაგალითად, ჩავთვალოთ, რომ გვაქვს
// [{name: ‘Lasha’, age: 30}, {name: ‘Saba’, age: 20}]. ფუნქციამ უნდა დააბრუნოს
// [{name: ‘Saba’, age: 20}, {name: ‘Lasha’, age: 30}]; შეგიძლია გამოიყენო sort() ფუნქცია

const users = [
    { name: 'Lasha', age: 33 },
    { name: 'Saba', age: 22 },
    { name: 'Tornike', age: 25 },
    { name: 'Elene', age: 24 },
    { name: 'Girogi', age: 27 },
    { name: 'Anna', age: 36 },
    { name: 'Mariami', age: 13 },
    { name: 'Aleksandre', age: 19 },
    { name: 'Irakli', age: 45 },
    { name: 'Keti', age: 26 },
    { name: 'Lika', age: 54 },
    { name: 'Luka', age: 60 },
];

const sortUsersAge = (users) => {
    const nerUsers = [...users]
    return nerUsers.sort((a,b) => a.age - b.age);
}

console.log(sortUsersAge(users));
console.log(users);
