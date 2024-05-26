let user = {
  username: "rohit",

  functionOne: () => {
    console.log(this.username);
  },

  functionTwo() {
    console.log(this.username);
  },
};

user.functionOne();
user.functionTwo();
