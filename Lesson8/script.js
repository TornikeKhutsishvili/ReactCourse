
// 1.
// დაწერე ფუნქცია expo, რომელიც იქნება რეკურსიული ფუნქცია და მიიღებს
// არგუმენტად: ა) ციფრს ბ) ხარისხს და გ) callback - ს და დააბრუნებს მიღებული
// ციფრის ხარისხს მაგალითად: 5 ხარისხად 3 - არის 125 (5 * 5 *5)

const expo = (num, quality, cb) => {
    if (typeof num !== 'number' || typeof quality !== 'number') return cb("number is necessary")
    const result = quality === 0 ? 1 : num * expo(num, quality - 1, () => {})
    cb(result)
    return result
}

const result = expo(5, 3, res => console.log("Callback result:", res));
console.log(`Returned result: ${result}`)
// const result2 = expo(5, "3", res => console.log("Callback result:", res));
// console.log(`Returned result: ${result2}`)



// 2.
// fetch ფუნქციის გამოყენებით წამოიღე მონაცემები მოცემული მისამართიდან
// https://jsonplaceholder.typicode.com/posts
// და გამოიტანე DOM-ში პოსტის სახით

async function Posts() {
    try {
        const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await posts.json()
        console.log(data)

        const content = document.querySelector('.content')
        data.forEach(dt => {
            if (!dt.id && !dt.userId && !dt.title || !dt.body) return;
            else{
                const card = document.createElement('div');
                card.className = "card text-bg-primary";

                card.innerHTML = `
                    <h5 class="card-title">${dt.title}</h5>
                    <div class="card-body">
                        <p class="card-text">${dt.body}</p>
                    </div>
                `;

                content.appendChild(card);
            }
        });

    } catch (error) {
        console.error(error)
    }
}
Posts();





// 3.
// დაწერე ასინქრონული ფუნქცია, რომელიც არგუმენტად იღებს ობიექტს და აკეთებს
// deep copy-ს ფუნქციამ უნდა გამოიძახოს reject თუ არგუმენტი არ არის ობიექტი.
// თუ ყველაფერი კარგად არის, გამოიძახოს resolve კოპირებული ობიექტით

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
        }
    ]
}


// გასატესტად:

// const user = [
//     fName = "Tornike",
//     lName = "Khutsishvili",
//     address = "Tbilisi",
//     banks = [
//         {
//             name: "Bank1",
//             address: {
//                 city: "Tbilisi",
//                 street: "Street1"
//             }
//         },
//         {
//             name: "Bank2",
//             address: {
//                 city: "Batumi",
//                 street: "Street2"
//             }
//         }
//     ]
// ]

async function DeepCopyAsync(user) {
    return new Promise((resolve, reject) => {
        if (typeof user !== 'object' || Array.isArray(user)) {
            reject(new Error("Argument is not an object"));
            return;
        }

        try {
            const copy = {
                ...user,
                banks: user.banks.map(
                    bank => ({
                        ...bank,
                        address: { ...bank.address }
                    })
                )
            }
            resolve(copy);

        } catch (error) {
            console.error(error)
        }
    });
}
async function DeepCopyResult() {
    try {
        const copiedUser = await DeepCopyAsync(user);
        console.log("Deep copied object:", copiedUser);
    } catch (error) {
        console.error("Error:", error.message);
    }
};
DeepCopyResult()
