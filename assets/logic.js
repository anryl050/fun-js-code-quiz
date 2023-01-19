// GIVEN I am taking a code quiz

// Step 1:
// WHEN I click the start button
// THEN a timer starts and I am presented with a question


// Step 2:
// WHEN I answer a question
// THEN I am presented with another question

// Step 3:
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// Step 4:
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// Step 5
// WHEN the game is over
// THEN I can save my initials and my score

var score = 0;
var questionsIndex = 0;

var multipleQuestions = [

];

var timeEl = document.querySelector(".timer");
var secondsLeft = 75;



// Timer function
// function setTime() {
//     var timeInterval = setInterval (function() {
//         secondsLeft--;
//         timeEl.textContent = "Time Remaining: " + secondsLeft;

//         if(secondsLeft === 0) {
//             clearInterval(timeInterval);
//             sendMessage();
//         }
//     }, 1000);
// }
// setTime ();
