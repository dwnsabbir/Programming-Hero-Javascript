//scope
// let age; // global scope variable
// function sayAge() {
//     age = 18; // local scope variable       //functional scope variable, it can only be accessed within the function. it is not accessible outside the function.
// }
// sayAge();
// console.log(`age is: ${age}`); // Output: Outside the function, age is: 18

{let age = 20; // block scope variable
    console.log(`age is: ${age}`); // Output: Inside the block, age is: 20
}


// {
//     let age = 20; // block scope variable
// }

// console.log(`age is: ${age}`);  (Output: ReferenceError: age is not defined) because the variable age is declared inside the block, it is not accessible outside the block. it is only accessible within the block.


