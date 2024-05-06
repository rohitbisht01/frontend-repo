### Closure

Closure is a bundling of two or more functions where
inner functions have access to the properties and methods of the outer
functions even after the execution of the external function is done.

```
for (var index = 1; index <= 3; index++) {
   setTimeout(function () {
       console.log("after " + index + " seconds: " + index);
   }, index * 1000);
}
```

There are two popular solutions: IIFE & let keyword.

IIFE because an IIFE creates a new scope by declaring a function and immediately executing it.

```
for (var index = 1; index <= 3; index++) {
    (function (index) {
        setTimeout(function () {
            console.log('after ' + index + ' second(s):' + index);
        }, index * 1000);
    })(index);
}
```

let keyword to declare a variable that is block-scoped.

it will create a new lexical scope in each iteration.

In addition, the new lexical scope is chained up to the previous scope so that the previous value of the index is copied from the previous scope to the new one.

```
for (let index = 1; index <= 3; index++) {
    setTimeout(function () {
        console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
}
```

### Reduce Method

Accepts a callback function and initial value as an inpu

Used to perform different types of actions like segregation,
aggregation, running things in sequence/series, etc.

```
arr.reduce(callback, initialValue);

arr.reduce(function (previousValue, curValue, curIndex, arr) {
  const nextValue = previousValue + curValue;

  return nextValue;
}, initialValue);
```

### Promises
