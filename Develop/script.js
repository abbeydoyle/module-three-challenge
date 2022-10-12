///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////



  // #password is the html id that js will write the password into ie 'your secure password' -> 'generated password'
  // #generate is thehtml id for the button used to begin the function and write the code



//define password options const as they will not change
const upcase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
const lowcase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const spchar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
const numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// choose var for user input
var length; 
var upcaseInput;
var lowcaseInput;
var spcharInput;
var numbInput;
var userInput;
var password;
// var passwordString;

// user input on password length
    length = Number(prompt("Choose a password length, 8 - 128 characters"));

    if (!length) {
      alert("This input field is required");
    }

    else if (length < 8 || length > 128) {
      alert("The password length must be between 8 and 128 characters")
    }

    else {
      upcaseInput = confirm("Inlcude upper case letters?");
      lowcaseInput = confirm("Inlcude lower case letters?");
      spcharInput = confirm("Inlcude special characters?");
      numbInput = confirm("Inlcude numbers?");
    }


    // 0 yes 4 no error
    if (!upcaseInput && !lowcaseInput && !spcharInput && !numbInput) {
      userInput = alert("At least one password character criteria must be selected");
    }

    // 4 yes 0 no
    else if (upcaseInput && lowcaseInput && spcharInput && numbInput) {
      userInput = upcase.concat(lowcase, spchar, numb);
    }

    // 3 yes 1 no
    else if (upcaseInput && lowcaseInput && spcharInput) {
      userInput = upcase.concat(lowcase, spchar);
    }

    else if (upcaseInput && lowcaseInput && numbInput) {
      userInput = upcase.concat(lowcase, numb);
    }

    else if (upcaseInput && spcharInput && numbInput) {
      userInput = upcase.concat(spchar, numb);
    }

    else if (lowcaseInput && spcharInput && numbInput) {
      userInput = lowcase.concat(spchar, numb);
    }


    // 2 yes 2 no
    else if (upcaseInput && lowcaseInput) {
      userInput = upcase.concat(lowcase);
    }

    else if (upcaseInput && numbInput) {
      userInput = upcase.concat(numb);
    }

    else if (upcaseInput && spcharInput) {
      userInput = upcase.concat(spchar);
    }

    else if (lowcaseInput && spcharInput) {
      userInput = lowcase.concat(spchar);
    }

    else if (lowcaseInput && numbInput) {
      userInput = lowcase.concat(numb);
    }

    else if (spcharInput && numbInput) {
      userInput = spchar.concat(numb);
    }

    // 1 yes 3 no
    else if (upcaseInput) {
      userInput = upcase;
    }

    else if (lowcaseInput) {
      userInput = lowcase;
    }

    else if (spcharInput) {
      userInput = spchar;
    }

    else if (numbInput) {
      userInput = numb;
    }

    /* for (var i = 0; i < length; i++) {
      var joinInput = userInput[Math.floor(Math.random() * userInput.length)];
      password.push(joinInput);
    }
    
    let passwordString = joinInput.toString();

    var passwordString = password.join("");

    */

    // this literally gives "'undefined' + 'generated password'"
   /*
    for (var i=0; i < length; i++) {
      password = password + userInput[Math.floor(Math.random() * userInput.length)];
    }
    */

    var passwordString = ""

    for (var i=0; i < length; i++) {
      passwordString = passwordString + userInput[Math.floor(Math.random() * userInput.length)];
    }


    return passwordString;


}

console.log("js link works");