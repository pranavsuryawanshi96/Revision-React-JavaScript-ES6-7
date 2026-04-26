//  array method map,filter,join
const users = [
  { id: 1, name: "john doe", age: 28, price: 99 },
  { id: 1, name: "pranav", age: 22, price: 200 },
  { id: 1, name: "patil", age: 19, price: 34 },
  { id: 1, name: "max", age: 17, price: 23 },
];

//  reduce
const total = users.reduce((sum, items) => sum + items.price, 0);
console.log(total);

// const names = users.map((user) => {
//   return user.name.toUpperCase();
// });

// console.log(users.map((users) => users.name.toLowerCase()));

// const age = users.filter((users) => users.age > 20);
// console.log(age);

//  best way
// const res = users
//   .filter((users) => users.age > 20)
//   .map(users.name.toUpperCase());
// console.log(res);

//  join method array to string

// const namesString = names.join(" ,");
// console.log(namesString);

// //  split string to array
// const namesArray = namesString.split(" , ");
// console.log(namesArray);

//  find method :- return the first element that satisfies a condition(or if not found undefined)
// const name = users.find((users) => users.age > 20);
// console.log(name);

// // findIndex
// const nameIndex = users.findIndex((users) => users.name === "patil");
// console.log(nameIndex);
