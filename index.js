function print(x = 5) {
   // if (x == undefined) x = "default";
    // if (typeof x == 'number') {
    //     console.log(x + 3);
    //     return;
    // }
    console.log(x);
}
/**
 * A Function adds two numbers
 * @param {Number} a - First number
 * @param {Number} b - Second number
 * @returns {Number} returns the sum of a and b 
 */
function specialAdd(a, b) {
    a = a * 5;
    b = b / 2;
  return( a + b ) ** 3;
}



//print("M. Shorbaji");
//print("Abo Omar");
//print(add(5, 2));
let result = specialAdd(1, 2);
//console.log(result);



//print(result);

let key = "Adnan";
switch (key) {
  case "Safwan":
    //console.log("Safwan is the teacher ");
    break;
  case "Abo Omar":
    //console.log("Abo Omar is the teacher in Assahabah ");
    break;
  case "Yehia":
   // console.log("Yehia lives in Qatar ");
    break;
    default:
    //    console.log("There is no ifo's on: " + key);
    break;
}


// Array:
let fruites = ["Apple", "Orange", "Banana", "Mango", 5, true];
//               0          1         2         3    4    5 
// fruites.length = 6
//print(fruites.length); // 6

//print(fruites[1]);
let end = fruites.length - 1;

//print the last element
//console.log(fruites[end]);


// for (let i = 0; i < 5; i++) {
//   console.log(i)
  
// }

// for (let i = 0; i <= end; i++) {
//   print(fruites[i]);
// }

// for (let i = end; i >= 0; i--) {
//   // statements 
//   print(fruites[i]);
 
// }

// let element;
// for (let index = 0; index < fruites.length; index++) {
//   element = fruites[index];
//   print(element);
  
// }

let input = 101;
let secretNumber = 101;

// != : compare the value 
// !== :  compare the value  and the data type
// while (input !== secretNumber) {
//  input = Number(prompt("Guess what is the number ? ")) ;
//   if (isNaN(input)) print("Enter only numbers");
//   if (input < secretNumber) print(input + " is less than the secret Number");
//   if (input > secretNumber) print(input + " is greater than the secret Number");

// }



do {
  input = Number(prompt("Guess what is the number ? ")) ;
    if (isNaN(input)) print("Enter only numbers");
    if (input < secretNumber) print(input + " is less than the secret Number");
    if (input > secretNumber) print(input + " is greater than the secret Number");
} while (input !== secretNumber);

print("You are winner!!!");




 
