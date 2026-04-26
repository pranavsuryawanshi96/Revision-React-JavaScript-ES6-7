// shallow copy and deep copy
const originalObj = {
  name: "pranav",
  address: { city: "pune" },
};
//  to make copy of object
// 1st type
// const shallowCopy = Object.assign({}, originalObj);
// console.log(shallowCopy);

// 2nd type
const shallowCopy = { ...originalObj };
console.log(shallowCopy);

originalObj.name = "Patil";
//  in case shallow copy nested  obj if u changes then changes will reflect but in in original key.pair if u update then it will not update 
console.log(shallowCopy.name); // pranav

originalObj.address.city = "delhi";
console.log(shallowCopy.address.city); // delhi in main obj value will change

const deepCopy = JSON.stringify(originalObj);
console.log(deepCopy);
