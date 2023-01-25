//TODO: GIVEN I am taking a code quiz

// List of Variables

// variable for questions array. Questions from: https://www.interviewbit.com/javascript-mcq/
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

// var for default value of the user's score
var score = 0;
// var for the total question index
var currentQuestionIndex = 0;
// var for seconds removed for each incorrect question
var incorrectAnswer = 20;
// var for the new Ul
var newUl = document.createElement("ul");
// var for the user's initials
var playerName = document.getElementById("userName");

// variables for timer
var timeEl = document.querySelector("#timer");
var secondsLeft = 75;
var stopClock = 0;

// variables to start the quiz
var startQuiz = document.getElementById("start-quiz");
// variables for Start button
var start = document.getElementById("start-button");
// variable for submit button
var submit = document.getElementById("submit-button");
// submit.textContent = "Submit";

// TODO: Step 1:
// TODO: WHEN I click the start button
// TODO: THEN a timer starts and I am presented with a question

// event listerner for Start button: triggers start of the timer and of the Quiz
start.addEventListener ("click", function(){
     setTime ()
     startGame(currentQuestionIndex)
    });   

// function for Timer
function setTime() {
    if(stopClock === 0){
    stopClock = setInterval (function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft <= 0) {
            clearInterval(stopClock);
            finishGame();
            timeEl.textContent = "No more time left!"
        }
        }, 1000);
    }
        startGame(currentQuestionIndex);
};

// TODO:Step 2
// TODO:WHEN I answer a question
// TODO:THEN I am presented with another question

// function to start the Quiz
function startGame(currentQuestionIndex){
    startQuiz.innerText = "";
    newUl.innerText = "";

    // for loop to populate next question and its choices. Once the last question is reached, the loop stops. 
    for (var i = 0; i <questionList.length; i++) {
    var quizQuestion = questionList[currentQuestionIndex].question;
    var quizAnswers = questionList[currentQuestionIndex].choices;
    startQuiz.textContent = quizQuestion;}
            
    // function to create a new list item for choice options for each question
    quizAnswers.forEach(function (newItem){
        var insertNewItem = document.createElement("li");
        insertNewItem.textContent = newItem;
        startQuiz.appendChild(newUl);
        startQuiz.appendChild(document.createElement("br"))
        newUl.appendChild(insertNewItem);
        newUl.appendChild(document.createElement("br"))
        insertNewItem.addEventListener("click",(fetchAnswer));
        // check point
        console.log(currentQuestionIndex) 
    })
    };
    // check point
    console.log(currentQuestionIndex);

// TODO:Step 3
// TODO: WHEN I answer a question incorrectly
// TODO: THEN time is subtracted from the clock

// function to obtain the answers for each question
function fetchAnswer(event){
    var choiceBtn = event.target.innerText;
    var correctAnswer = questionList[currentQuestionIndex].answer;
    var answerDescription = document.createElement("section");
    answerDescription.setAttribute("id","answerDescription");

    // for each correct answer, a text displays at the bottom alerting the user that the correct answer was selected. 
    if(choiceBtn === correctAnswer){
        score++; 
        answerDescription.textContent = "Correct Answer!"  
        answerDescription.setAttribute("style", "color:green");
    } else {
        // for each incorrect answer, a text displays at the bottom alerting the user that the wrong answer was selected. Penalty time is subtracted (-20 seconds).
        secondsLeft = secondsLeft - incorrectAnswer;
        answerDescription.textContent = "Wrong Answer!"
        answerDescription.setAttribute("style", "color:red");
    }
    // check point
    console.log(choiceBtn)

    // function to clear out the "answerDescription", once it was presented to the user. 
    setTimeout(function() {
        answerDescription.setAttribute("class", "hide");
        }, 500);

    currentQuestionIndex++; 
    
// TODO:Step 4
// TODO:WHEN all questions are answered or the timer reaches 0
// TODO:THEN the game is over

    // once the last question is reached, the finishGame function is triggered, and the timmer stops. 
    if (currentQuestionIndex >= questionList.length){
        finishGame();   
        // check point 
        console.log("end game!")
        } else {
        startGame(currentQuestionIndex);
    }
    startQuiz.appendChild(answerDescription);
};

// TODO:Step 5
// TODO:WHEN the game is over
// TODO:THEN I can save my initials and my score

// function to end the Quiz
function finishGame(){ 
    // recalls the information from the previously generated class in HTML with associated elements (header, input field, etc.)
    startQuiz.setAttribute("class", "hide");   
    var allDoneScreen = document.getElementById("finish");
    allDoneScreen.removeAttribute("class");
    var finalScoreEl = document.getElementById("quiz-score");
    
    // final score is populated in the "Your final score is" section
    if (secondsLeft >= 0) {
        var timeLeft = secondsLeft;
        clearInterval(stopClock);
        finalScoreEl.textContent = timeLeft;
    }
    
    // event Listener for the Submit button
    submit.addEventListener("click", function(){
        var name = playerName.value;
        
        // locally stores the objects values (initials and score) each time the quiz is taken
        if(name === ''){
            alert("Please Enter your Initials!");            
        } else {
            var endScore = {
                intials:name,
                score: timeLeft
            }
                    
            var highScore = localStorage.getItem("highScore");
            if(highScore === null) {
                highScore = [];
            } else{
                highScore = JSON.parse(highScore);
            }
            highScore.push(endScore);
            
            var newScore = JSON.stringify(highScore);
            localStorage.setItem("highScore", newScore);
            
            // takes the user to a new HTML page with high scores, once the Submitt button is pressed. 
            window.location.replace("highscore.html");
        }}
    );
};
        