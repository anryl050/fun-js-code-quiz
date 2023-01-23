// 1. click start button -  timer starts and first question appears
// 2. create a function for a timer
    // if the start button is pressed, then the clock starts. 
// 3. create a function for start quiz (to make first question appear)
    // if the start button is pressed, the 1st question (index 0)
// add event listener to activate the functions
// 4. create a function to grab the questions
        // create a "for" loop to make the questions appear:
        // 1. Grabs question from index 0 (increments by 1 each loop)
        // 2. Grabs answers from choices at that specific array
        // 3. Check if right or wrong
        // 4. Clear question
        // 5. Clear answer
// 5. create a function to grab the answers 
    // note 4 and 5 can be combined together
// 6. create a function to compare the user choice to the correct answer
// 7. create a function to end the quiz.

var questionList = [
{   question:"JavaScript is an _______ language?",
    choices:["Object-Oriented", "Object-Based", "Procedural", "None of the Above"],
    answer:"Object-Oriented",},

{   question:"Which of the following keywords is used to define a variable in Javascript",
    choices:["var", "let", "Both A and B", "None of the Above"],
    answer:"Both A and B",},

{   question:"Which of the following methods is used to access HTML elements using Javascript?",
    choices:["getElementbyId()", "getElementsByClassName()", "Both A and B", "None of the Above"],
    answer:"Both A and B", },
{   question:"Upon encountering empty statements, what does the Javascript Interpreter do?",
    choices:["Throws an error", "Ignores the statements", "Gives a warning", "None of the Above"],
    answer:"Ignores the statements", },

{   question:"Which of the following methods can be used to display data in some form using Javascript?",
    choices:["document.write()", "console,log()", "window.alert()", "All of the Above"],
    answer:"All of the Above", },
];

var score = 0;
var currentQuestionIndex = 0;
var incorrectAnswer = 20;
var newUl = document.createElement("ul");

// variables for timer
var timeEl = document.querySelector("#timer");
var secondsLeft = 75;

// variables to start the quiz
var startQuiz = document.getElementById("start-quiz");
// variables for Start button
var start = document.getElementById("start-button");
// variable for submit button
var submit = document.getElementById("submit-button");
// submit.textContent = "Submit";

// evelt listerner for Start button
start.addEventListener ("click", function(){
    setTime ()
    startGame(currentQuestionIndex)
    });   

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

function startGame(currentQuestionIndex){
    startQuiz.innerText = ""
    newUl.innerText = ""

    for (var i = 0; i <questionList.length; i++) {
    var quizQuestion = questionList[currentQuestionIndex].question;
    var quizAnswers = questionList[currentQuestionIndex].choices;
    startQuiz.textContent = quizQuestion;}
            
    // function to create a new list for every new question from the Questions array.
    quizAnswers.forEach(function (newItem){
        var insertNewItem = document.createElement("li");
        insertNewItem.textContent = newItem;
        startQuiz.appendChild(newUl);
        startQuiz.appendChild(document.createElement("br"))
        newUl.appendChild(insertNewItem);
        newUl.appendChild(document.createElement("br"))
        insertNewItem.addEventListener("click",(getAnswer));
        console.log("hi!")
    })
    };

    function getAnswer(e){
        var choiceBtn = e.target;

        if(choiceBtn === questionList[currentQuestionIndex].answers){
            var answerDescription = document.createElement("footer");
            answerDescription.setAttribute("id","answerDescription");
            answerDescription.setAttribute("style", "color:green");
            score++; 
            answerDescription.textContent = "Correct Answer!"  
        } else {
            secondsLeft = secondsLeft - incorrectAnswer;
            var answerDescription = document.createElement("footer");
            answerDescription.setAttribute("style", "color:red");
            answerDescription.textContent = "Wrong Answer!"
        }
        
        currentQuestionIndex++; 
        
        if (currentQuestionIndex >= questionList.lenght) {
            finishQuiz();
            console.log("end game!")
        } else {
            startGame(currentQuestionIndex);
        }
    };

    function finishQuiz(){
        startQuiz.innerText = ""
    }