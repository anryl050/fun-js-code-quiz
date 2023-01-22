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

//List of global variables
var scoreResult;
var correctAnswer = 0;
var currentQuestionIndex = 0;
var incorrectAnswer = 20;
var newUl = document.createElement("ul");

// variables to start the quiz
var startQuiz = document.getElementById("start-quiz");

// variables for Start button
var start = document.getElementById("start-button");

// variable for Next button
var next = document.getElementById("next-button");

// variables for timer
var timeEl = document.querySelector("#timer");
var secondsLeft = 75;

var answer = document.querySelector(".answer");

var insertNewItem = document.createElement("li");

var answerDescription = document.createElement("section");

//! Step 1:
//! WHEN I click the start button
// !THEN a timer starts and I am presented with a question

// function for Timer
function setTime() {

let timeInterval = setInterval (function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
        clearInterval(timeInterval);
    }
    }, 1000);
};


//function to call the array with questions and to display the first question
function startGame(){
    startQuiz.innerText = ""
    newUl.innerText = ""

    var quizQuestion = questionList[currentQuestionIndex].question;
    var quizChoices = questionList[currentQuestionIndex].choices;
    startQuiz.textContent = quizQuestion;
    
        
    // function to create a new list for every new question from the Questions array.
    quizChoices.forEach(function (newItem){
        
        var insertNewItem = document.createElement("li");
        insertNewItem.textContent = newItem;
        
        insertNewItem.setAttribute("class","answer");
        startQuiz.appendChild(newUl);
        // added <br> element after each question before the list
        startQuiz.appendChild(document.createElement("br"))
        newUl.appendChild(insertNewItem);
        // added <br> element after each choice option in the list
        newUl.appendChild(document.createElement("br"))
        // insertNewItem.addEventListener("click",(checkAnswer));
        insertNewItem.addEventListener("click",(getAnswer));
        console.log(currentQuestionIndex)
    })

    };

// event Listener to start the timer and the quiz (ref to functions setTime and startGame)
start.addEventListener ("click", function(){
    setTime ()
    startGame(currentQuestionIndex)
    });


//! Step 2:
//! WHEN I answer a question
//! THEN I am presented with another question

// function to get the get the answer and present the next question
function getAnswer(event){
    var choiceBtn = event.target;
    checkAnswer(choiceBtn)
    
    var quizQuestion = questionList[currentQuestionIndex].question;
    var quizChoices = questionList[currentQuestionIndex].choices;
    startQuiz.textContent = quizQuestion;
    
    // function to create a new list for every new question from the Questions array.
    quizChoices.forEach(function (newItem){
        
        var insertNewItem = document.createElement("li");
        insertNewItem.textContent = newItem;
        
        insertNewItem.setAttribute("class","answer");
        startQuiz.appendChild(newUl);
        // added <br> element after each question before the list
        startQuiz.appendChild(document.createElement("br"))
        newUl.appendChild(insertNewItem);
        // added <br> element after each choice option in the list
        newUl.appendChild(document.createElement("br"))
        // insertNewItem.addEventListener("click",(checkAnswer));
        insertNewItem.addEventListener("click",(getAnswer));
    })
        
        console.log(currentQuestionIndex)
    };

function checkAnswer(choiceBtn){
    if(choiceBtn === questionList[currentQuestionIndex].answer){  

    var answerDescription = document.createElement("section");
    // answerDescription.setAttribute("class","answerDescription", "style", "color:green");
    answerDescription.setAttribute("class","answerDescription")

    score++; 
    answerDescription.textContent = "Correct Answer!"

    } else 

    {
        secondsLeft = secondsLeft - incorrectAnswer;

        var answerDescription = document.createElement("section");
        // answerDescription.setAttribute("style", "color:red");
        answerDescription.textContent = "Wrong Answer!"
    }
    currentQuestionIndex++; 
};

//! Step 3:
//! WHEN I answer a question incorrectly
//! THEN time is subtracted from the clock

// timer function so subtract the time from the wron answer? 
// if answer is wrong, display wrong at the bottom of the quiz
// use similar function as above but configure subtraction by using 'if'?

//! Step 4:
//! WHEN all questions are answered or the timer reaches 0
//! THEN the game is over

// function to stop the game at 0seconds or when the last question is answered (maybe use 'if'?) 

//! Step 5
//! WHEN the game is over
//! THEN I can save my initials and my score
// show the score
// enter initials
// function to store the infor and display back in the High Score
// configure the clear button
