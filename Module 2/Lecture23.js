//  memorization is performance optimization technique where you store the result of expensive fn calls

// function slowAd(a, b) {
//   for (let i = 0; i < 1e8; i++) {}
//   return a + b;
// }
// console.time("No Memo");
// console.log(slowAd(5, 10));
// console.timeEnd("No Memo");

// console.time("No Memo again");
// console.log(slowAd(5, 10));
// console.timeEnd("No Memo again");

function memorizedAdd() {
  const cache = {};
  return function (a, b) {
    const key = `${a}_${b}`;
    if (cache[key]) {
      return cache[key];
    }
    for (let i = 0; i < 1e8; i++) {}
    const res = a + b;
    cache[key] = res;
    return res;
  };
}

const add = memorizedAdd();

console.time("with Memo");
console.log(add(5, 10));
console.timeEnd("with Memo");

console.time("with Memo again");
console.log(add(5, 10));
console.timeEnd("with Memo again");
