// GIVEN I am taking a code quiz

// Step 1:
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// When "Start Quiz" button is pressed, the timer starts
let start = document.querySelector("#start-button");

start.addEventListener ("click", function(){
    var timeEl = document.querySelector(".timer");
    var secondsLeft = 75;
    function setTime() {
    let timeInterval = setInterval (function() {
        secondsLeft--;
        timeEl.textContent = "Time Remaining: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
} setTime ();
}
);

//When "Start Quiz" button is pressed, first question appears



// Step 2:
// WHEN I answer a question
// THEN I am presented with another question

var score = 0;
var questionsIndex = 0;

var multipleQuestions = [
{
    question:"JavaScript is an _______ language?",
    multAnswers:["Object-Oriented", "Object-Based", "Procedural", "None of the Above"],
    answer:"Object-Oriented",
},

{
    question:"Which of the following keywords is used to define a variable in Javascript",
    multAnswers:["var", "let", "Both A and B", "None of the Above"],
    answer:"Both A and B",
},

{
    question:"Which of the following methods is used to access HTML elements using Javascript?",
    multAnswers:["getElementbyId()", "getElementsByClassName()", "Both A and B", "None of the Above"],
    answer:"Both A and B", 
},

{
    question:"Upon encountering empty statements, what does the Javascript Interpreter do?",
    multAnswers:["Throws an error", "Ignores the statements", "Gives a warning", "None of the Above"],
    answer:"Ignores the statements", 
},

{
    question:"Which of the following methods can be used to display data in some form using Javascript?",
    multAnswers:["document.write()", "console,log()", "window.alert()", "All of the Above"],
    answer:"All of the Above", 
},

];

// Step 3:
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// Step 4:
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// Step 5
// WHEN the game is over
// THEN I can save my initials and my score

