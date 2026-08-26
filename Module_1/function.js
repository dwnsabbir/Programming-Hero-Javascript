//function are reusable code blocks to perfect a particular task

// function total (price=10, quantity=12){                         //without parameters, the function will use default values of price and quantity
//          const grandTotal = price*quantity;
//          return grandTotal;

// }

// const spend = total ();
// console.log(spend);


// function total(price, quantity=12) {                         //with (spend) parameters, the first parametre always default to price but not quantity
//     const grandTotal = price * quantity;
//     return grandTotal;

// }

// const spend = total(10);
// console.log(spend);



// function total(price, quantity) {                         //with parameters, the first parametre always default to price but not quantity
//     const grandTotal = price * quantity;
//     return grandTotal;

// }

// const spend = total(10,12);
// const save = 200- spend;
// console.log(spend, save);


// function sayHellow(name){                                      //; void function, it does not return any value. it just print the value of name variable.

//     console.log(`Hellow ${name}`);
// }

// sayHellow("dewan");



// // 1 থেকে 10 পর্যন্ত শুধু 7 - এর চেয়ে বড় number print করো।

// function printNumberGreaterThanSeven(number) {
//     for (let i = 1; i <= number; i++) {
//         if (i > 7) {
//             console.log(i);
//         }
//     }
// }

// printNumberGreaterThanSeven(10);

//একটা number 10-এর বেশি হলে "Big", না হলে "Small" return করো।

// function checkNumber(a) {
// if(a>10){return "big";}
//     else{return "small";}}

// console.log(checkNumber(16));

//একটা number 0-এর বেশি হলে "Positive", 0-এর কম হলে "Negative", এবং 0 হলে "Zero" return করো।

// function checkNumber(a){
//     if(a>0) {return"positive";}
// else if (a<0) {return "negative";}
// else {return "zero";}}

// console.log(checkNumber(10));

//Even/Odd Checker 

// function EvenNumber(a){
// if (a%2===0) {return "even";}
// else{return "odd";}
// }

// console.log(EvenNumber(10));


//একটা number 7 দিয়ে নিঃশেষে ভাগ গেলে "Lucky", না হলে "Not Lucky" return করো।

// function checknumber(a) {
//     if (a % 7 === 0) {
//         return "Lucky";
//     } else {
//         return "not lucky";
//     }
// }

// console.log(checknumber(7));


//একজন student-এর marks দেওয়া আছে।
// 80 বা তার বেশি → "A"
// 60 বা তার বেশি → "B"
// 40 বা তার বেশি → "C"
// 40 - এর কম → "Fail"


function checkMarks(marks) {
    if (marks >= 80) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 40) {
        return "C";
    } else {
        return "Fail";
    }
}

console.log(checkMarks(65));


