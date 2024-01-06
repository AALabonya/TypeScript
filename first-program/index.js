var userName;
userName = "labonya";
var age = 25;
console.log(age);
console.log(userName);
// Global scope
let globalVar = 'I am global';

function myFunction() {
  // Local scope
  let localVar = 'I am local';
  console.log(globalVar); // Accessible
  console.log(localVar); // Accessible
}

// console.log(globalVar); // Accessible
// console.log(localVar); // Not accessible - ReferenceError: localVar is not defined