// Async & Await
//  async and await are keyword in js used to handle asynchronous operation
//  async makes or  means a function return promise
//  await pauses the function execution until the promise is resolved or reject

// async function myFunction() {
//   try {
//     const res = await someAyncTask();
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }

async function fetchUserData() {
  console.log("Fetching user data!!");
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(res);

    const user = await res.json();
    console.log("user loaded ", user);
  } catch (error) {
    console.log("failed to fetch", error);
  } finally {
    console.log("request completed");
  }
}
fetchUserData();
