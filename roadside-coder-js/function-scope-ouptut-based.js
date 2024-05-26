for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

// so every time this function runs it creates a block scope with this i variable
// if it has var over here it would be printed 5 5 5 5 cause it has global scope
