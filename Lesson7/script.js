
// CALLBACK
// const promiseResponse = new Promise((resolve, reject) => {
//     if (Math.random() > 0.1) {
//         resolve("this is true")
//     } else {
//         reject("this is false")
//     }
// });

// promiseResponse
//     .then((result) => console.log(result))
//     .catch(error => console.log(error))
//     .finally(() => console.log("this was tuff"))


// PROMISE
// function makeToys() {
//     return new Promise((resolve, reject) => {
//         if (Math.random() > 0.1) {
//             resolve("Undefected")
//         } else {
//             reject("Defected")
//         }
//     })
// }

// function sellToys(status) {
//     return new Promise((resolve, reject) => {
//         if (status === "Undefected") {
//             if (Math.random() < 0.7) {
//                 resolve("Sold")
//             } else {
//                 reject("Toy was unsuccessful")
//             }
//         }
//     })
// }

// makeToys()
//     .then((status) => sellToys(status))
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))


// ASYNC/AWAIT
// async function makeToys() {
//     if (Math.random() > 0.1) {
//         return "Undefected"
//     } else {
//         return "Defected"
//     }
// }

// async function sellToys(status) {
//     if(status === "Undefected"){
//         if (Math.random() < 0.7) {
//             return "Sold"
//         } else {
//             return "Toy was unsuccessful"
//         }
//     }
// }

// async function promisify() {
//     try {
//         const status = await makeToys()
//         const result = await sellToys(status)
//         console.log(result)

//     } catch (error) {
//         console.log(error)
//     }
// }
// promisify()


// EVENT LOOP
// function bar() {
//     console.log("Barr")
// }

// function baz() {
//     bar()
// }

// function foo() {
//     baz()
// }
// foo()








// 1.
// setTimeout ფუნქცია იყენებს callback-ს, დაწერეთ მისი promise-ზე დაფუძნებული ალტერნატივა
// (მაგ: mySetTimeout(delay).then(...)

// const mySetTimeout = (delay) => {
//     return new Promise((resolve, reject) => {
//         if(delay) {
//             setTimeout(() => {
//                 resolve(`${delay / 1000} sec passed`);
//             }, delay);
//         } else {
//             reject("It's good, the code loaded without delay.")
//         }
//     })
// }

// mySetTimeout(7000)
//     .then((res) => console.log(res))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("code is running"))



// 2.
// გამოიყენე პირველ დავალებაში შექმნილი ფუნქცია, რათა განავრცო ჩვენს მიერ დაწერილი “Toy Shop”
// შემდეგი პირობის იმპლემენტაციით: სათამაშოს დამზადებას სჭირდება დაახლოებით 3 წამი.
// (დროის მითითება შესაძლებელი უნდა იყოს დინამიურად).
// დავამატოთ კიდევ ერთი ნაბიჯი, რომელსაც დავარქმევთ პირობითად, “deliverToys”, რომლის დაყოვნებაც
// 2 წამია (გადაეცემა დინამიურად).
// სათამაშოს გაყიდვას სჭირდება 1 წამი (დინამიურად).
// ყოველი მომდევნო ნაბიჯი უნდა ელოდებოდეს წინა ნაბიჯის რეზულტატს და შესაბამისად წყვეტდეს
// მოხდება თუ არა მისი შესრულება.
// გამოიყენე .then().catch() და async/await
// სინტაქსები. (2 ვარიანტი)


// Toy Shop:

// TIMEOUT
const mySetTimeout = (delay) => {
    return new Promise((resolve, reject) => {
        if(delay) {
            setTimeout(() => {
                resolve(`${delay / 1000} sec passed`);
            }, delay);
        } else {
            reject("It's good, the code loaded without delay.")
        }
    })
}

// THEN/CATCH
// function makeToys() {
//     return new Promise((resolve, reject) => {
//         const delay = () => {
//             if (Math.random() > 0.1) {
//                 resolve("Undefected");
//             } else {
//                 reject("Defected");
//             }
//         }
//         mySetTimeout(3000).then(delay).catch(reject)
//     })
// }

// function deliverToys(status) {
//     return new Promise((resolve, reject) => {
//         if (status === "Undefected") {
//             const delay = () => {
//                 resolve("Delivery");
//             }
//             mySetTimeout(2000).then(delay)

//         } else {
//             reject("Not delivery");
//         }
//     })
// }

// function sellToys(deliver) {
//     return new Promise((resolve, reject) => {
//         if (deliver === "Delivery") {
//             if (Math.random() < 0.6) {
//                 const delay = () => {
//                     resolve("Sold");
//                 }
//                 mySetTimeout(1000).then(delay)

//             } else {
//                 reject("Toy was unsuccessful and not sold");
//             }
//         }
//     })
// }

// makeToys()
//     .then((status) => deliverToys(status))
//     .then((deliver) => sellToys(deliver))
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("You can already make new toys"))





// ASYNC/AWAIT
async function makeToys() {
    const delay = () => {
        if (Math.random() > 0.1) {
            return "Undefected";
        } else {
            return "Defected";
        }
    }
    await mySetTimeout(3000)
    return delay()
}

async function deliverToys(status) {
    if (status === "Undefected") {
        const delay = () => {
            return "Delivery";
        }
        await mySetTimeout(2000)
        return delay()

    } else {
        return "Not delivery";
    }
}

async function sellToys(deliver) {
    if (deliver === "Delivery") {
        if (Math.random() < 0.6) {
            const delay = () => {
                return "Sold";
            }
            await mySetTimeout(1000)
            return delay()

        } else {
            return "Toy was unsuccessful and not sold";
        }
    }

    return "Not delivery";
}

async function promisify() {
    try {
        const status = await makeToys()
        const deliver = await deliverToys(status)
        const result = await sellToys(deliver)
        console.log(result)

    } catch (error) {
        console.log(error)
    } finally {
        console.log("You can already make new toys")
    }
}

promisify()
