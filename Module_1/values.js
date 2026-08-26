// falsy value false 0 "" null NaN Undefined

let age= "fourteen";  // fourteen is a string, so it is a truthy value.
if (age) {console.log("age exists");}
else{ console.log("age does not exist");}


console.log(age* "hellow");
console.log(age * 0);

console.log(typeof NaN); // Output: number
console.log(typeof null); // Output: object 
console.log(typeof undefined); // Output: undefined 
console.log(typeof Infinity); // Output: number
