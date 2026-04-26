// arrow function vs normal function - this key
//  fnc can be hoisted
// function greet() {
//   console.log("hi patil");
// }
// greet();

//  arrow fn
// const greet = () => {
//   console.log("patil");
// };
// greet();

// const abc = () => "patil";
// const txt = abc();
// console.log(txt);
name = "patil";
// const user = {
//   name: "pranav",
//   sayhi: function () {
//     console.log("hi", this.name);
//   },
// };
// user.sayhi();

const user = {
  name: "pranav",
  sayhi: () => {
    console.log("hi", name);
  },
};
user.sayhi();
//  this can't be accssed in arrow fn
