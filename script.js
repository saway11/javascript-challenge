var characterLength = 8-128;
var choiceArr = [];
var specialCharArr =['~','!','@','#','$','%','^','&','*','(',')','_','-','=','+','<'];
var lowerCaseArr =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr =['0','1','2','3','4','5','6','7','8','9'];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This function will prompt an error message if the user does not
// add 8-18 characters
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}
// This function allows a new password to generate after clicking the generate password button
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

// This will prompt the questions where the user can add lowercase, uppercase, numbers
// special characters and the character length which is 8-128
function getPrompts() {
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters would you like your password to be? (8-128)"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number between 8 and 128.");
    return false;
  }

 if (confirm("Would you lowercase letters in your password?")) {
  choiceArr = choiceArr.concat(lowerCaseArr);
 }
 if (confirm("Would you uppercase letters in your password?")) {
  choiceArr = choiceArr.concat(upperCaseArr);
 }
 if (confirm("Would you special characters in your password?")) {
  choiceArr = choiceArr.concat(specialCharArr);
 }
 if (confirm("Would you numbers in your password?")) {
  choiceArr = choiceArr.concat(numberArr);
 }
 return true;
}
