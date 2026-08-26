// Arrow Functions

//example of arrow function with below code snippet
// function total (price=10, quantity=12){                         //without parameters, the function will use default values of price and quantity
//          const grandTotal = price*quantity;
//          return grandTotal;

// };


//arrowfunction rules= const total = () => {}



// const total = (price, quantity=12) => {
//     const grandTotal = price * quantity;
//     return grandTotal;

// };

// const spend = total(10);
// console.log(spend);


const add = (a, b) => a + b; // if the function has only one line of code, we can omit the curly braces and the return statement.
const sum = add(10, 20);
console.log(sum); // Output: 30  
