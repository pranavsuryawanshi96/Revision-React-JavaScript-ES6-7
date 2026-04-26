// getter and setter
//   object is  a collection of properties and methods
//  class :-collection is similar type of objects

// class Person {
//   constructor(name) {
//     this._name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(newName) {
//     if (newName) {
//       this._name = newName;
//     } else {
//       console.log("new name can't empty");
//     }
//   }
// }
// const person = new Person("pranav");

// person.name = "pranav patil";
// console.log(person.name);

// class A {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class B extends A {
//   geDetails() {
//     return `Here is the name ${this.name}`;
//   }
// }

// const obj = new B("pranav");
// obj.geDetails();
// console.log(obj.geDetails());

// class User {
//   #logAccess() {
//     console.log("Private logging");
//   }
//   showProfile() {
//     console.log("showProfile...");
//     this.#logAccess();
//   }
// }

// const u = new User();
// u.showProfile();

