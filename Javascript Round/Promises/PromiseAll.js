let promiseA = new Promise(function (reject, resolve) {
    setTimeout(function () {
        resolve("Promise A");
    }, 2000)
})

let promiseB = new Promise(function (reject, resolve) {
    setTimeout(function () {
        resolve("Promise B");
    }, 1000)
})

let promiseC = new Promise(function (reject, resolve) {
    setTimeout(function () {
        reject("Promise C");
    }, 1000)
})

try {
    let result = Promise.all([promiseA, promiseB, promiseC])
    result
        .then((data) => console.log(data))
        .catch((err) => console.log("Atleast one promise failed."))
} catch (error) {
    console.log("Error");
}