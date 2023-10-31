// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var n = [];// created a variable to store a new password
  var passLength = parseInt(prompt("Enter password length between (8 to 128)")); //Asking user to input the password length
   // Checking if the input password length is a number and is within the specified range
  if ((typeof passLength === "number" && passLength >= 8 && passLength <= 128)) { 
    // Asking user if the password should include at least one lowercase letter
    var Lower = confirm("password must include at least 1 Lowercase letter"); 
    // Asking user if the password should include at least one uppercase letter
    var Upper = confirm("password must include atleast 1 Uppercase");
    // Asking user if the password should include at least one number
    var Numbers = confirm("password must include atleast 1 Number");
    // Asking user if the password should include at least one special character
    var Symbols = confirm("password must include atleast 1 Special Character");
        // If none of the above options are selected, display an alert to select at least one character type
    if (!(Lower || Upper || Numbers || Symbols)) {
      alert('You need to select atleast one character type');
      getPasswordOptions();
    }  
  } else {
    // If the password length is not a number or is not within the specified range, display an alert
  alert('Please enter a password length between 8 and 128');
  getPasswordOptions();
}
// If the password should include lowercase letters, concatenate them to the variable n
if (Lower) {
  n = n.concat(lowerCasedCharacters);
}
// If the password should include uppercase letters, concatenate them to the variable n
if (Upper) {
  n = n.concat(upperCasedCharacters);
}
// If the password should include number, concatenate them to the variable n
if (Numbers) {
  n = n.concat(numericCharacters);
}
// If the password should include special charecter, concatenate them to the variable n
if (Symbols) {
  n = n.concat(specialCharacters);
}
// Return the array of possible password characters and the password length
return [n, passLength];
}
// getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
  // Get a random index within the length of the array
  var a = Math.floor(Math.random() * arr.length);
  // return the element at the random index from the array
  return arr[a];
}

// Function to generate password with user input
function generatePassword() {
  // Call function getPasswordOptions to get the array of possible password characters and the password length to store in b variable
  var b = getPasswordOptions();
// created a variable c to store a new random generated password
  var c = "";
  // Loop through the password length times
  for (var i = 0; i < b[1]; i++) {
    // Generate a random character from the getRandom array of possible characters
    c += getRandom(b[0]);

  }
  // return generated password
  return c;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);