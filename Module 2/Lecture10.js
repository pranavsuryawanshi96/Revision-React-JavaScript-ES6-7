// Destructuring  js
const User = {
  name: "pranav",
  age: "30",
  place: "pune",
};
// const user1 = User.name;
// console.log(user1);

const { name, age } = User;
console.log(name, age);

const { email = "not provided" } = User;
console.log(email);
