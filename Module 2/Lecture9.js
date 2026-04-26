//  optional chaining
const User = {
  name: "pranav",
  preference: null,
};

//  to check the if the form api some data is not coming then to avoid the error for console will get undefined
const city = User?.address?.city;
console.log(city);

// Nullish Coalescing
const pref = User.preference ?? "Latur";
console.log(pref);
