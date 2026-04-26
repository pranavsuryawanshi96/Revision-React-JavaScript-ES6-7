// slice splice
//  slice returns a portion of an array as a new array without changing the original
// splice :- original array is modify like add,removes,or replace

// let items = ["pen", "pencil", "notebook", "eraser", "sharpener"];
// items.splice(2, 1); // from 2 index 1 will remove
// items.splice(1, 0, "marker");
// items.splice(2, 2, "scale", "ruler");
// console.log(items);

let cart = ["Milk", "Bread", "Butter", "vegtables", "Juice"];
const preview = cart.slice(1, 4);
console.log(preview);
console.log(cart);
