// closure: if a variable is not found in inner scope it searches in outer scope
// what is closure: the ability of a function to access variables and functions which are lexically out of their lexical scope is called closure

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);
