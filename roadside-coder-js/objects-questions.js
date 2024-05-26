const user = {
  name: "rohit",
  age: 33,
};

console.log(user["name"]);
console.log(user.name);

// updating
user["name"] = "himamhsu";
console.log(user.name);

// deleting something: delete keyword is only used when deleting something from object it cannot be used for deleting local variable
delete user.name;
console.log(user);

// Adding dynamic key value pair to an object
const property = "FirstName";
const name = "Rohit";

const test = {
  [property]: name,
};

console.log(test);

// Iterate over an object

const temp = {
  name: "Rohit",
  age: 34,
  gender: "male",
};

for (const property in temp) {
  const key = property;
  const value = temp[property];

  console.log(key, value);
}

// Create a function multiplyByTwo(obj) that multiplies all numberic property values by 2
const nums = {
  a: 100,
  b: 200,
  title: "maths",
};

for (const property in nums) {
  if (typeof nums[property] === "number") {
    nums[property] *= 2;
  }
}

console.log(nums);

// Output based question
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123; // a["[object Object]"] = 123
a[c] = 456; // a["[object Object]"] = 456

console.log(a[b]);

// Use case of JSON.stringify and JSON.parse
const userInfo = {
  name: "rohit",
  age: 23,
};

const strObj = JSON.stringify(userInfo);
// sessionStorage.setItem("user", strObj);

// const res = JSON.parse(localStorage.getItem("user"));
// console.log(res);

// Output
console.log([..."rohit"]);

const userObj = { name: "rohit", age: 23 };
const admin = { admin: true, ...user };

console.log(admin);

// arrow function and normal function output in object
const shape = {
  radius: 3,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => {
    console.log(this.radius); // undefined
    return 2 * Math.PI * this.radius;
  },
};

console.log(shape.diameter());
console.log(shape.perimeter()); // NaN =>  cause perimeter function is a arrow function so this will point to global object, where we dont have radius resulting in undefined

// Output based
let e = { greeting: "hello" };
let f;

f = e; // here we are providing the reference to the object not copying
e.greeting = "heyy";
console.log(f.greeting);

console.log({ a: 1 } == { a: 1 }); // false
console.log({ a: 1 } === { a: 1 }); // false

// Deep Copy
const student = {
  name: "rohit",
  rollno: 23,
};

const deepCopy = { ...student };
student.name = "himamhsu"; // here the student object is getting updated which wont affect the deepCopy variable
console.log(deepCopy);

const anotherDeepCopy = Object.assign({}, student); // Object.assign(target,source)
// student.rollno = 44; // here the student object is getting updated which wont affect the anotherDeepCopy variable
console.log(anotherDeepCopy);

const anotherCopy = JSON.parse(JSON.stringify(student));
console.log(anotherCopy);
