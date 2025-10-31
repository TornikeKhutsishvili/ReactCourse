
// მოცემულია მასივი [{name: 'Temo', age: 25},
// {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]

// 1.
// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user - ების მასივს და
// დააბრუნებს ყველაზე პატარა ასაკის მქონე ადამიანის სახელს

const users = [
    {name: 'Temo', age: 25},
    {name: 'Lasha', age: 21},
    {name: 'Ana', age: 28}
]

function smallAge(users) {
    let minAge = users[0].age;

    users.forEach(user => {
        if (user.age < minAge) {
            minAge = user.age;
        }
    });

    const youngest = users.filter(
        user => user.age === minAge
    );

    return youngest[0].name;
}

console.log(smallAge(users));




// 2.
// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს
// იგივე მნიშვნელობების მქონე ახალ (განსხვავებულ) ობიექტს

const newUsers = users.map(user => ({ ...user }));
console.log(newUsers);
console.log(newUsers === users);



// 3.
// დაწერე პროგრამა, სადაც ორი a და b მომხმარებლები აგორებენ კამათელს მანამ, სანამ
// არ გაგორდება, რომელიც უფრო ნაკლებ ცდაში გააგორებს სამიანს ის არის გამარჯვებული

let a_roll = 0;
let b_roll = 0;

while(a_roll !== 3 && b_roll !== 3) {
    a_roll = parseInt(Math.random() * 6) + 1;
    b_roll = parseInt(Math.random() * 6) + 1;
}

if(a_roll === 3){
    console.log("გამარჯვებულია A");
} else if(b_roll === 3){
    console.log("გამარჯვებულია B");
} else {
    console.log("ფრე");
}
