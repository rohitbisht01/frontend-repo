function outerFunc() {
  let blog = "rohit";
  function innerFunc() {
    console.log(blog);
  }

  return innerFunc;
}

const res = outerFunc();
res();

function x(a) {
  function y(b) {
    function z(c) {
      return a + b + c;
    }
    return z;
  }
  return y;
}

let a = x(2);
let b = a(3);
let c = b(4);

console.log(c);

for (var index = 1; index <= 3; index++) {
  setTimeout(function () {
    console.log("after " + index + " seconds: " + index);
  }, index * 1000);
}
