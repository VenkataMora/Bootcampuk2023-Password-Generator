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
    var LowerCase = confirm("password must include atleast 1 Lowercase");
    if (LowerCase === true) {
      n = n.concat(lowerCasedCharacters);
      var UpperCase = confirm("password must include atleast 1 Uppercase");

      if (UpperCase === true) {
        n = n.concat(upperCasedCharacters);
        var Numbers = confirm("password must include atleast 1 Number");
        if (Numbers === true) {
          n = n.concat(numericCharacters);
          var Symbols = confirm("password must include atleast 1 Special Character");
          if (Symbols === true) {
            n = n.concat(specialCharacters);

          } else {
            alert('You need to selecr atleast 1 special charecter');
            getPasswordOptions();
          }
        } else {
          alert('You need to select atlest 1 number');
          getPasswordOptions();
        }
      } else {
        alert('You need to select Upper case atleast 1 charecter');
        getPasswordOptions();
      }
    } else {
      alert('You need to select lower case atleast 1 charecter');
      getPasswordOptions();
    }
  } else {
    alert('Please enter a password length between 8 and 128');
    getPasswordOptions();
  }
  console.log([n, passLength]);
  return [n, passLength];

}
// getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
  var a = Math.floor(Math.random() * arr.passLength);
 
  return arr[a];
}
console.log(arr[a]);

// Function to generate password with user input
function generatePassword() {
  var b = getPasswordOptions();
  var c = "";
  for (var i = 0; i < b[1]; i++) {
    c += getRandom(b[0]);
  }
  console.log(c);
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