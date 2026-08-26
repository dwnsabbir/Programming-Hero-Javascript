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
