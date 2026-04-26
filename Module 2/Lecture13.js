// Call,Apply,Blind
const user1 = {
  name: "pranav",
  age: 28,
};

const user2 = {
  name: "patil",
  age: 25,
};
//  here this word not be apply we trying  call to use out of object
function printDetails(city, country) {
  console.log(`Name:${this.name},Age:${this.age},Location:${city} ${country}`);
}
printDetails.call(user2, "pune", "India");
//  in apply we have to pass the array
printDetails.apply(user1, ["pune", "India"]);

//  bind :- it will returns a new function it will did not invoke immediately
const patilDetails = printDetails.bind(user1, "pune", "India");
patilDetails();

//  bind interview question
const obj = {
  name: "pranav",
  greet: function () {
    return `Hello${this.name}`;
  },
};
const greetFn = obj.greet(); // by this we can't call we have to use bind
const greetFn = obj.greet.bind(obj);
console.log(greetFn());
