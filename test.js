// let password= Math.floor(Math.random() * (10 - 0 + 0)) + 0;
// console.log(password);


let passwordlength = '10'
let password = []; 
for(i=1 ;i<=passwordlength ;i++){
    password.push(Math.floor(Math.random() * 10));
    /*In JavaScript, when you use the comparison operators like <=, <, >, or >= with operands of different types,
    JavaScript will attempt to convert the operands to the same type before making the comparison. 
     This process is called type coercion. */
}
console.log(password);



let st = '010102'

let num = parseInt(st)
console.log(num);


//upper case 
const uppercaseLetters = [];
for (let i = 65; i <= 90; i++) {
  uppercaseLetters.push(String.fromCharCode(i));
}
console.log(uppercaseLetters);
// or
const uppercaseLetters2 = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));
console.log(uppercaseLetters2); // Output: ["A", "B", "C", ..., "X", "Y", "Z"]


//lower case 
const lowercaseletters = []
for (let i = 97; i <= 122; i++){
  lowercaseletters.push(String.fromCharCode(i))
}
console.log(lowercaseletters);
