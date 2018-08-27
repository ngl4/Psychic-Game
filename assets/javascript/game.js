
//Declare a global array variable containing alphabet letters
var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

//Declare global variables 
var winNum = 0;
var loseNum = 0;
var guessLeft = 9;
var userGuessArr = [];

//A function reacts to every key presses
document.onkeyup = function(event) {

//Declare local variables to save both keypress and random computer generated number
  var userGuess = event.key;

  var computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Every key letter users press will be pushed to the userGuessArr for displaying in HTML at 'user-guess' Id
  userGuessArr.push(userGuess);
  document.getElementById("user-guess").innerHTML = userGuessArr.join(", ");

  //If-else if conditionals for the comparison logic between userGuess and computerGuess
  //When user gets the correct guess, game gets reset except the win number (goes up by 1)
  if (userGuess === computerGuess) { 
    guessLeft = 9;
    winNum += 1;
    userGuessArr = [];
  } else if (userGuess !== computerGuess) {
    guessLeft -= 1;
    console.log(guessLeft);
//When user gets the wrong guess, game gets reset except for the lose number (goes up by 1)
    if (guessLeft === 0) {
      guessLeft = 9;
      loseNum += 1;
      userGuessArr = [];
    }
  }
//Display all the numbers at the specific area in HTML 
  document.getElementById("win-num").textContent = winNum;

  document.getElementById("lose-num").textContent = loseNum;

  document.getElementById("guess-left").textContent = guessLeft;
};
