//nested data

let user = {                                   //name = key, value = "sabbir" pair and it's called entry.
    name: "sabbir",
    age: 25,
    address: {
        city: "Gazipur",
        area: "mouchak",
        village: "Bhannara",
        zipcode : 1751,   
    },

};

// console.log(user["address"].city);


//console.log(user["address"]["zipcode"]);

// console.log(user.address.zipcode);


let entry = Object.entries(user);

// console.log(entry[0][1]);

let students= [ 
    {
    
    name: "sabbir",
    Id : 21308007,
    },
    {name: "labib",
    Id : 21308008,
    address : {
        area: "uttara",
        village: "jamalpur",
        hobby : "eating food",
        option: ["victor", "dhaka city", "ajmeri"] // option array 
        },
    },
    {name: "yamin",
    Id : 21308009,
    },
    {name: "afrin",
    Id : 21308010,
    },

];

students[1].address.option[1] = "premium"; // we can update,change, delete the string from array.

console.log(students[1].address.option[1]);

