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
  var n = [];
  var passLength = parseInt(prompt("Enter password length between (8 to 128)"));
  if ((typeof passLength === "number" && passLength >= 8 && passLength <= 128)) {
    var Lower = confirm("password must include at least one Lowercase letter");
    var Upper = confirm("password must include atleast 1 Uppercase");
    var Numbers = confirm("password must include atleast 1 Number");
    var Symbols = confirm("password must include atleast 1 Special Character");
    if (!(Lower || Upper || Numbers || Symbols)) {
      alert('You need to select atleast one character type');
      getPasswordOptions();
    }  
  } else {
  alert('Please enter a password length between 8 and 128');
  getPasswordOptions();
}
if (Lower) {
  n = n.concat(lowerCasedCharacters);
}
if (Upper) {
  n = n.concat(upperCasedCharacters);
}
if (Numbers) {
  n = n.concat(numericCharacters);
}
if (Symbols) {
  n = n.concat(specialCharacters);
}
return [n, passLength];
}
// getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
  var a = Math.floor(Math.random() * arr.length);
  return arr[a];
}

// Function to generate password with user input
function generatePassword() {
  var b = getPasswordOptions();
  var c = "";
  for (var i = 0; i < b[1]; i++) {
    c += getRandom(b[0]);
  }
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