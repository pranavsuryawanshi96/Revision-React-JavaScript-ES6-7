// Event Delegation for Performance Optimization & Event Bubbling
//  event bubbling:- event flows from target elements to its parents
//  event delegation:- parents elements handle child events efficiently
//  event bubbling
document.getElementById("grandParent").addEventListener("click", () => {
  console.log("granParent Click");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent Click");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("child Click");
});

// event delegation
const menu = document.getElementById("menu");
menu.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log("clicked", e.target.textContent);
  }
});
