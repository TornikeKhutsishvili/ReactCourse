// 1.
// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ უნდა
// დააბრუნოს 2 - ელემენტიანი მასივი, სადაც პირველი ელემენტია პირველი და მეორე პარამეტრის ჯამი,
// ხოლო მეორე ელემენტი - მესამე ელემენტიდან დაწყებული ყველა დანარჩენის ნამრავლი

const calculation = (...n) => {
    if (n.length < 3) {
        throw new Error("გთხოვ, შეიყვანო მინიმუმ 3 რიცხვი");
    }

    let sum1 = 0;
    let sum2 = 1;
    let result = [];

    if(n.length >= 3){
        sum1 = n[0] + n[1];

        for(let i = 2; i < n.length; i++){
            sum2 *= n[i];
        }
    }

    result.push(sum1, sum2);
    return result;
}

console.log(calculation(2, 3, 4, 5, 100));
console.log(calculation(2, 3, 4));



// 2.
// დავუშვათ გვინდა ობიექტიდან წავიკითხოთ შემდეგი ველი: user.banks[2].address.city.
// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს city-ს. გამოიყენე destructuring-ი.
// თუ ასეთი ველი არ არსებობს უნდა დაბრუნდეს undefined

const user = {
    fName: "Tornike",
    lName: "Khutsishvili",
    address: "Tbilisi",
    banks: [
        {
            name: "Bank1",
            address: {
                city: "Tbilisi",
                street: "Street1"
            }
        },
        {
            name: "Bank2",
            address: {
                city: "Batumi",
                street: "Street2"
            }
        },
        {
            name: "Bank3",
            address: {
                city: "Kutaisi",
                street: "Street3"
            }
        },
        {
            name: "Bank4",
            address: {
                city: "Tbilisi",
                street: "Street4"
            }
        },
        {
            name: "Bank5",
            address: {
                city: "Batumi",
                street: "Street5"
            }
        }
    ]
}

const getCity = (user) => {
    const { banks: [ , , { address: { city } = {} }] } = user;
    return city;
}
console.log(getCity(user));



// 3.
// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს ნებისმიერ ობიექტს და დააბრუნებს იგივე მნიშვნელობების მქონე
// ახალ (განსხვავებულ) ობიექტს გაითვალისწინე, რომ თუ ობიექტში კიდევ სხვა ობიექტებია იმათი ასლებიც უნდა
// შეიქმნას გამოიყენეთ (...) ოპერატორი.

const copyUser = (user) => {
    return {
        ...user,
        banks: user.banks.map(
            bank => ({
                ...bank,
                address: { ...bank.address }
            })
        )
        // banks: [
        //     ...user.banks,
        // ],
        // address: { ...user.address }
    }
}
console.log(copyUser(user));




// n quantity Objects
// ეს მეტად დინამიური და ადვილად გამოსაყენებელია:

const user2 = { fName: "Toko" };
const user3 = { lName: "Khutsishvili" };
const user4 = {
    fName: "Tornike",
    banks: [
        {
            name: "Bank1",
            address: {
                city: "Tbilisi",
                street: "Street1"
            }
        }
    ]
};

const AllUsers = (...args) => {
    return args.map(us => ({
        ...us,
        banks: us.banks?.map(
            bank => ({
                ...bank,
                address: { ...bank.address }
            })
        ) || []
    }));
};

const users = AllUsers(user, user2, user3, user4);
console.log(users);
