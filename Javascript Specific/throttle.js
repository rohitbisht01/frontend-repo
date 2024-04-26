// const throttle = (func, limit) => {
//   let lastFunc;
//   let lastRan;

//   return function () {
//     const args = arguments;
//     const context = this;

//     if (!lastRan) {
//       func.apply(context, args);
//       lastRan = Date.now();
//     } else {
//       clearTimeout(lastFunc);
//       lastFunc = setTimeout(function () {
//         if (Date.now() - lastRan >= limit) {
//           func.apply(context, args);
//           lastRan = Date.now();
//         }
//       }, limit - (Date.now() - lastRan));
//     }
//   };
// };

// btn.addEventListener(
//   "click",
//   throttle(function () {
//     return console.log("HOLA! oppo", new Date().toUTCString());
//   }, 1000)
// );

function throttle(cb, delay = 1000) {
  let lastTime = 0;
  console.log("called throttle immediately");

  return function (...args) {
    const now = new Date().getTime();
    if (now - lastTime < delay) return;
    lastTime = now;
    cb(...args);
  };
}
