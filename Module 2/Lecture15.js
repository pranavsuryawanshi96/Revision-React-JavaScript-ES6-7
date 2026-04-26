// rest ,spread operator
// spread operator is used "spread" to **unpack** element of an array or object
//  rest operator collects **multiple** elements into single array

// const newArr = [...oldArray];
// const newObj = [...oldObj];
//  spread
// const nums = [1, 2, 3];
// const copy = [...nums, 4];
// console.log(copy);

// const newStudent = {
//   name: "pranav",
// };
// const copy1 = { ...newStudent, age: 29 };
// console.log(copy1);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const merge = [...arr1, ...arr2];
// console.log(merge);

// Rest

// function logAll(...items) {
//   console.log(items);
// }
// logAll("pens", "pencil", "eraser");

const [first, ...rest] = [10, 20, 30, 40];
console.log(first, rest);
