// Polyfill for map

const arr = [1, 2, 3, 4, 5];

const updatedArr = arr.map((ele) => ele * 2);
// console.log(updatedArr);

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

const nums = [1, 2, 3, 4, 5];
const multiplyByThree = nums.myMap((num, i, arr) => {
  return num * 3;
});

// console.log(multiplyByThree);

// Polyfill for filter
const filteredArr = arr.filter((item) => item % 2 !== 0);
// console.log(filteredArr);

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i], i, this);
    }
  }

  return temp;
};

const filterNumGreaterThanTwo = nums.myFilter((num) => {
  return num > 2;
});
// console.log(filterNumGreaterThanTwo);

// Polyfill for reduce

// arr.reduce((acc,cur,i,arr)=>{},initialValue)

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const reducedValue = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(reducedValue);
