// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("kudos")
//     }, 3000)
// })

// promise.then(function (data) {
//     console.log("promise resolved. " + data);
// }).catch(function (error) {
//     console.log("promise rejected with error. " + error);
// })



// callback function example


function fetchData(callbackFunction) {
    setTimeout(() => {
        const data = "Hello World"
        callbackFunction(data)
    }, 2000)
}

// callback fucntion
function callbackFunction(data) {
    console.log(`Processed data: ${data}`);
}

fetchData(callbackFunction)

function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const data = "Hello, Callback!";
        callback(null, data); // Assuming no error for simplicity
    }, 1000);
}

// Using Callback
fetchDataWithCallback((error, data) => {
    if (error) {
        console.error(`Error: ${error}`);
    } else {
        console.log(`Callback Data: ${data}`);
    }
});

function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Hello, Promises!";
            resolve(data);
        }, 1000);
    });
}

// Using promises
fetchDataWithPromise.then((data) => {
    console.log("data ", data);
}).catch((error) => {
    console.log("error:", error);
})

function fetchDataWithAsyncAwait() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Hello, Async/Await!";
            resolve(data);
        }, 1000);
    });
}

// using async/await
async function processDataAsyncAwait() {
    try {
        const data = await fetchDataWithAsyncAwait();
        console.log("Async/Await data: ", data);
    } catch (error) {
        console.log("error: ", error);
    }
}
