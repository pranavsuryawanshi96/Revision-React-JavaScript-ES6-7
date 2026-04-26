// console.log("start");
// setTimeout(() => {
//   console.log("seTimeout callback");
// }, 4000);

// Promise.resolve().then(() => {
//   console.log("promise callback");
// });
// console.log("end");

//  callstack
function f1() {
  console.log("f1");
}
function f2() {
  f1();
  console.log("f2");
}
f2();
