//! GIVEN I am taking a code quiz

// variable for questions
// questions from: https://www.interviewbit.com/javascript-mcq/
var questionList = [
{
    question:"JavaScript is an _______ language?",
    choices:["Object-Oriented", "Object-Based", "Procedural", "None of the Above"],
    answer:"Object-Oriented",
},

{
    question:"Which of the following keywords is used to define a variable in Javascript",
    choices:["var", "let", "Both A and B", "None of the Above"],
    answer:"Both A and B",
},

{
    question:"Which of the following methods is used to access HTML elements using Javascript?",
    choices:["getElementbyId()", "getElementsByClassName()", "Both A and B", "None of the Above"],
    answer:"Both A and B", 
},

{
    question:"Upon encountering empty statements, what does the Javascript Interpreter do?",
    choices:["Throws an error", "Ignores the statements", "Gives a warning", "None of the Above"],
    answer:"Ignores the statements", 
},

{
    question:"Which of the following methods can be used to display data in some form using Javascript?",
    choices:["document.write()", "console,log()", "window.alert()", "All of the Above"],
    answer:"All of the Above", 
},
];

var scoreResult;
var correctAnswer = 0;
var currentQuestionIndex = 0;
var incorrectAnswer = 20;
var newUl = document.createElement("ul");
// TODO: can the variable up to be replaced with the variables below?
// var newUl = document.getElementById("norderedQuestList");
// var newLi = document.getElementById("norderedQuestList");


// variables to start the quiz
var startQuiz = document.getElementById("start-quiz");

// variables for Start button
var start = document.getElementById("start-button");


// variables for timer
var timeEl = document.querySelector("#timer");
var secondsLeft = 75;

//! Step 1:
//! WHEN I click the start button
// !THEN a timer starts and I am presented with a question

// When "Start Quiz" button is pressed, the timer starts
function setTime() {

let timeInterval = setInterval (function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
        clearInterval(timeInterval);
    }
    }, 1000);
};

start.addEventListener ("click", function(){
    setTime ()
    startGame(currentQuestionIndex)
    });

//When "Start Quiz" button is pressed, first question appears

function startGame(currentQuestionIndex){
    startQuiz.innerText = ""
    newUl.innerText = ""
    var quizQuestion = questionList[currentQuestionIndex].question;
    var quizChoices = questionList[currentQuestionIndex].choices;
    startQuiz.textContent = quizQuestion;
    
    // function to create a new list for every new question from the Questions array.
    quizChoices.forEach(function (newItem){
        var insertNewItem = document.createElement("li");
        insertNewItem.textContent = newItem;
        startQuiz.appendChild(newUl);
        // added <br> element after each question before the list
        startQuiz.appendChild(document.createElement("br"))
        newUl.appendChild(insertNewItem);
        // added <br> element after each choice option in the list
        newUl.appendChild(document.createElement("br"))
        insertNewItem.addEventListener("click",(getAnswer));
    })
};

//! Step 2:
//! WHEN I answer a question
//! THEN I am presented with another question

function getAnswer(){

    // currentQuestionIndex++  - - this needs  to be added at the end of my getAnswers function
}



//! Step 3:
//! WHEN I answer a question incorrectly
//! THEN time is subtracted from the clock


//! Step 4:
//! WHEN all questions are answered or the timer reaches 0
//! THEN the game is over


//! Step 5
//! WHEN the game is over
//! THEN I can save my initials and my score

