let chainA = function () {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("chainA");
        }, 1000);
    });
};
let chainB = function () {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("chainB");
        }, 3000);
    });
};
let chainC = function () {
    return Promise.reject("Error in chainC");
};
chainA()
    .then((data) => {
        console.log(data);
        return chainB();
    })
    .then((data) => {
        console.log(data);
        return chainC();
    })
    .then((data) => {
        console.log(data);
        console.log("all async request were successful");
    })
    .catch((err) => {
        console.log("common error handle");
        console.log("all async request were not successful with error " + err);
    });