//  lexical scope;- means that as inner function can remember and use the variable from its outer function.  this is why inner function can access variables that are defined around it
// Closure :-a function remember and accesses the variable from its outer{lexical} scope
//  it means variable value is remembered count
// outer function is will be  executive and inner function this will be variable value should be remember inner function is will be point out to outer function

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
