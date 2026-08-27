//array

let name = ["sabbir", "dewan", "sakib", "samia", "salma", 2,true,{}];  // here indexing method are used. and the countdown start from 0,1,2,3,4
             //[0 , 1, 2, 3, 4, 5, 6, 7]; indexing method
let number = [12, 13, 14, 15, 300];

//console.log(name[0], number[0]);

// name.push ("shobuz dewan"); // last a element add hbe 
// name.push("z");
// name.push("y");
// name.pop();                  // the last name will be vanished after triggered pop
// name.pop(); 

// name.unshift("Shobuz dewan");   // unshift - 0 number index er agey name add hbe
// name.shift();     // shift - first name remove hbe.



//splice(kotonumberindex , delete element, "new string")
//name.splice(4,0,"dwn") //(index,delete,"newname")

// console.log(name);


//slice  (start index, endindex)    
// {startIndex: Jekhan theke copy shuru hobe (ei index-ta shoho). Kono kichu na dile 0 theke shuru hoy. 
// endIndex: Jekhan porjonto copy hobe(ei index - er thik aag porjonto, mane ei index - ta bad jabe).Kono kichu na dile array - er shesh porjonto copy hoy.}
let sliceNames = name.slice(4,7);
console.log(sliceNames);






