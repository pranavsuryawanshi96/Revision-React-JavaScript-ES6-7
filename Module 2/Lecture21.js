// Promises
// const myPromise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("");
//   } else {
//     reject("");
//   }
// });
// // then we have whatever we req response we use then to receive
// myPromise.then((res) => {
//   console.log(res);
// }).catch(()=>{

// }).finally(()=>{

// })

// function orderFood(isRestaurantOpen) {
//   return new Promise((resolve, reject) => {
//     console.log("placing order...");

//     setTimeout(() => {
//       if (isRestaurantOpen) {
//         resolve("order received");
//       } else {
//         reject("Restaurant is closed");
//       }
//     }, 2000);
//   });
// }
// orderFood(true)
//   .then((res) => {
//     console.log(res);
//     return "Preparing Food..!!";
//   })
//   .then((res) => {
//     console.log(res);
//     return "Out of Delivery";
//   })
//   .then((res) => {
//     console.log(res);
//     return "Received";
//   })
//   .catch((error) => {
//     console.log("error", error);
//   })
//   .finally(() => {
//     console.log("thanks for using Swiggy");
//   });

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => {
//     return res.json();
//     res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   Promise.all() is a method that takes an array of promises and returns a new promise that or it will move to array of object if the some api is failed then all api will failed
//  resolve when all of them are resolved, rejects if any one fails
const fetchUser1 = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
  (res) => res.json(),
);

const fetchUser2 = fetch("https://jsonplaceholder.typicode.com/todos/2").then(
  (res) => res.json(),
);

const fetchUser3 = fetch("https://jsonplaceholder.typicode.com/todos/3").then(
  (res) => res.json(),
);

Promise.all([fetchUser1, fetchUser2, fetchUser3])
  .then((user) => {
    console.log("All users Loaded.!!", user);
  })
  .catch((error) => {
    console.log("error fetching user info", error);
  });
