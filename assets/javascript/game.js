//Problem: Computer Guess has store all the letter info
// and the Computer will be randomly thiinking/choosing a letter

//Solution: Create a variable and an Array containning all the alphabet letters
//mathfloor/ mathrandom * option.length

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

// Randomly chooses a choice from the options array. This is the Computer's guess.


//Problem: Computer has a letter guessed before user presses the key

//Problem: user guesses will be based on keypress
//Solution: Create a function for this key pressed with an Event Listenner of .onkeyup
//its data will be stored in a variable for future access

var winNum = 0; 
var loseNum = 0;
var guessLeft = 9;

var userGuessArr = [];


document.onkeyup = function(event) {
  
    
 

    var userGuess = event.key;

     var computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];



    userGuessArr.push(userGuess);
    document.getElementById("user-guess").innerHTML = userGuessArr.join(", ");
   



  //Conditionals!!!!

  //Problems: Wins
  //When the player wins, increase the Wins counter and start the game over again (without refreshing the page)
  

 

  //Problem: Losses
  //When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

  

  //Problem: Guesses Left
  //There are only 9 guesses
  //Every time the key presess, it counts as one guess
  //The display will show one guess less, which is 8
  

    if (userGuess === computerGuess) {


        guessLeft = 9; 
        winNum += 1;
        userGuessArr = [];

    

    }else if (userGuess !== computerGuess) {

        guessLeft -= 1;
        console.log(guessLeft);
        

        if (guessLeft === 0) {

            guessLeft = 9;
            loseNum += 1;
            userGuessArr = [];
            
        }

    }

 
    document.getElementById("win-num").innerHTML = winNum;

    document.getElementById("lose-num").innerHTML = loseNum;

    document.getElementById("guess-left").innerHTML = guessLeft;



   


  //Problem: You Guesses so far
  //Every key presses will display
  //The display will show a letter on the "You Guesses so far"
  //once it reaches nine
  //Display these until the user either wins or loses
};





//Trial and Error====================================================

// var guessLeft = 9;
// var guessLeft = document.getElementById("guess-left").innerHTML;

// for (guessLeft; guessLeft > -1; guessLeft--) {
//   if (userGuess !== computerGuess) {
//     document.getElementById("guess-left").innerHTML = guessLeft;

//     console.log(guessLeft);

//     if (guessLeft === 0) {
//       return loseNum += 1;
//       document.getElementById("lose-num").innerHTML = loseNum;
//     }
//   } else {
//     return guessLeft = 9;
//     document.getElementById("guess-left").innerHTML = guessLeft;

//     return winNum += 1;
//     document.getElementById("win-num").innerHTML = winNum;
//   }
// }

// var html =
                 
// "<p>Wins: " + winNum + "</p>" +
// "<p>Losses: " + loseNum + "</p>" +
// "<p>Guesses Left: " + guessLeft + "</p>" +
// "<p>You Guesses so far: " + userGuessArr.join(", ") + "</p>" ;

// document.querySelector("#game").innerHTML = html;
