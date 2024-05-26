// here we have to see the value of x in current scope so it is undefined

var x = 32;

var func = function () {
  console.log(x);
  var x = 20;
};

func();
