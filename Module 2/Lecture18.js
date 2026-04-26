// js prototype and inheritance

// const arr = [1, 2, 3, 4];

// Array.prototype.sayHello = function () {
//   return "sayHello..";
// };

// // console.log(arr.sayHello());
// Array.prototype.last = function () {
//   return this[this.length - 1];
// };
// console.log(arr.last());

function Person(name) {
  this.name = name;
}
const user = new Person("patil");
