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
// let passwordLength = parseInt(prompt('How many characters for your password?'));
// if (isNaN(passwordLength) === true) {
//   alert ('Password length must be a number between 8 and 128')
// }
// if (passwordLength < 8 || passwordLength > 128) {
//   alert ('Password length must be between 8 and 128')
// } 
let passwordLength 
let passwordLengthIncorrect = true
while (passwordLengthIncorrect) {
  passwordLength = parseInt(prompt('How many characters for your password?'));
  if (isNaN(passwordLength) === true) {
    alert ('Password length must be a number between 8 and 128')
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert ('Password length must be between 8 and 128')
  } else {
    passwordLengthIncorrect = false
  }

}

alert('You chose: ' + passwordLength)

let includeLower = confirm ('Do you want to include lower case characters in password?');
let includeUpper = confirm ('Do you want to include Upper case characters in password?');
let includeNumbers = confirm ('Do you want to include number characters in password?');
let includeSpecial = confirm ('Do you want to include special characters in password?');

if (includeLower === false && includeUpper === false &&
    includeNumbers === false && includeSpecial === false) {
      alert ('You must select at least one character type');
      return;
    }
    
    let options = {
      passwordLength: passwordLength,
      includeLower: includeLower,
      includeUpper: includeUpper,
      includeNumbers: includeNumbers,
      includeSpecial: includeSpecial,
    }
    return options;
}

// Function for getting a random element from an array
function getRandom(arr) {
let index = Math.floor (Math.random() * arr.length);
let randomChar = arr[index];
return randomChar;
}

// Function to generate password with user input
function generatePassword() {
let passwordOptions = getPasswordOptions();

let passwordArray = [];

let possibleChar = [];

let garuanteedChar = [];

if (passwordOptions.includeLower){

  possibleChar = possibleChar.concat (lowerCasedCharacters);
  garuanteedChar.push (getRandom(lowerCasedCharacters));
}

if (passwordOptions.includeUpper){

  possibleChar = possibleChar.concat (upperCasedCharacters);
  garuanteedChar.push (getRandom(upperCasedCharacters));
}

if (passwordOptions.includeNumbers){

  possibleChar = possibleChar.concat (numericCharacters);
  garuanteedChar.push (getRandom(numericCharacters));
}

if (passwordOptions.includeSpecial){

  possibleChar = possibleChar.concat (specialCharacters);
  garuanteedChar.push (getRandom(specialCharacters));
}
console.log('Possible char = ', possibleChar);

let garuanteedLength = garuanteedChar.length;

for (let i = 0; i < garuanteedLength; i++) {

  passwordArray[i] = garuanteedChar[i];
}

for (let i = garuanteedLength; i < passwordOptions.passwordLength; i++) {
  passwordArray[i] =  getRandom(possibleChar)
}
return passwordArray.join('')
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