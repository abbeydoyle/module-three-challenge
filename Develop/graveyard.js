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
  



/*
math.random
math.floor
array.push
array.length
window.alert
window.confirm
*/


console.log("linked");

//choose const because these variables will not change
// can these be strings not arrays?

const upcase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
const lowcase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const spchar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
const numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// choose var for user input

var length;
var upcaseinput;
var lowcaseinput;
var spcharinput;
var numbinput;
var input;

/*
var length = Number(prompt("Choose a password length, 8 - 128 characters"));

// use confirm for easier yes no input

var upcaseinput = confirm("Inlcude upper case letters?");
var lowcaseinput = confirm("Inlcude lower case letters?");
var spcharinput = confirm("Inlcude special characters?");
var numbinput = confirm("Inlcude numbers?");
*/


function genPassword() {

  length = Number(prompt("Choose a password length, 8 - 128 characters"));

  if (!length) {
    alert("This input field is required");
  } 
  else if (length < 8 || length > 128) {
    length = Number(prompt("The password must be between 8 and 128 characters in length"))
  }
 
  else {
    upcaseinput = confirm("Inlcude upper case letters?");
    lowcaseinput = confirm("Inlcude lower case letters?");
    spcharinput = confirm("Inlcude special characters?");
    numbinput = confirm("Inlcude numbers?");
  }

  // 0 yes 4 no error
  if (!upcaseinput && !lowcaseinput && !spcharinput && !numbinput) {
    input = alert("At least one password character criteria must be selected");
  }
  
  // 4 yes 0 no
  else if (upcaseinput && lowcaseinput && spcharinput && numbinput) {
    input = upcase.concat(lowcase, spchar, numb);
  }

  // 3 yes 1 no
  else if (upcaseinput && lowcaseinput && spcharinput) {
    input = upcase.concat(lowcase, spchar);
  }

  else if (upcaseinput && lowcaseinput && numbinput) {
    input = upcase.concat(lowcase, numb);
  }

  else if (upcaseinput && spcharinput && numbinput) {
    input = upcase.concat(spchar, numb);
  }

  else if (lowcaseinput && spcharinput && numbinput) {
    input = lowcase.concat(spchar, numb);
  }

  // 2 yes 2 no
  else if (upcaseinput && lowcaseinput) {
    input = upcase.concat(lowcase);
  }

  else if (upcaseinput && numbinput) {
    input = upcase.concat(numb);
  }

  else if (upcaseinput && spcharinput) {
    input = upcase.concat(spchar);
  }

  else if (lowcaseinput && spcharinput) {
    input = lowcase.concat(spchar);
  }

  else if (lowcaseinput && numbinput) {
    input = lowcase.concat(numb);
  }

  else if (spcharinput && numbinput) {
    input = spchar.concat(numb);
  }

  // 1 yes 3 no
  else if (upcaseinput && lowcaseinput && spcharinput && numbinput) {
    input = upcase;
  }

  else if (lowcaseinput) {
    input = lowcase;
  }

  else if (spcharinput) {
    input = spchar;
  }

  else if (numbinput) {
    input = numb;
  }


  var password = [];

  for (var i = 0; i < length; i++) {
    var comboInput = input[Math.floor(Math.random() * input.length)];
    password.push(comboInput);
  }

  var finalPassword = password.join("");
    UserInput(finalPassword);
    return finalPassword;

}

function UserInput(finalPassword) {
  document.getElementById("password").textContent = finalPassword;
}