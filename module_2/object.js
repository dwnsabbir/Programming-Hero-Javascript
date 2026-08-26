// object 

let user = {                                   //name = key, value = "sabbir" pair and it's called entry.
name : "sabbir",
age : 25,
address : "gazipur",

};

// console.log(user.address);

// console.log(user["address"]);  // user['  ${}    ']

delete user.age;

user.address = "dhaka";


user.address = {
    city : "Gazipur",
    area : "mouchak",
    village : "Bhannara"
};

// console.log(user);

// console.log(Object.entries(user));

// console.log(Object.keys(user));

console.log(Object.values(user));