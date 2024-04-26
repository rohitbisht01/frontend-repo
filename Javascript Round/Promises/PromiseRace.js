let promiseA = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Promise A");
    }, 2000)
})

let promiseB = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Promise B");
    }, 1000)
})

let promiseC = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Promise C");
    }, 3000)
})

try {
    let result = Promise.race([promiseA, promiseB, promiseC])
    result
        .then((data) => console.log(data))
        .catch((err) => console.log("Atleast one promise failed."))
} catch (error) {
    console.log("Error");
}