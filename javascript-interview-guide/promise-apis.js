const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise A is rejected");
  }, 3000);
});

const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise B is resolved");
  }, 3000);
});

const promiseC = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise C is resolved");
  }, 2000);
});

// Promise.all()
try {
  const results = Promise.all([promiseA, promiseB, promiseC]);

  results
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
} catch (error) {
  console.log(error);
}

// Promise.race()
try {
  const results = Promise.race([promiseA, promiseB, promiseC]);

  results
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
} catch (error) {
  console.log(error);
}

// Promise.allSettled()
try {
  const results = Promise.allSettled([promiseA, promiseB, promiseC]);

  results
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
} catch (error) {
  console.log(error);
}

// Promise.any()
try {
  const results = Promise.any([promiseA, promiseB, promiseC]);

  results
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
} catch (error) {
  console.log(error);
}
