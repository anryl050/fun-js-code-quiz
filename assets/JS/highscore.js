// List of Variables
var scoreList = document.querySelector("#highScore-list");
var clearBtn = document.querySelector("#clear-button");

// event Listener for the Clear button, to remove previously stored infromation
clearBtn.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
}
);

// fetches the info from the local storage
var highScore = localStorage.getItem("highScore");
highScore = JSON.parse(highScore);

// creates the new list item for every new object added to the Score List
if (highScore !== null) {

    for (var i = 0; i < highScore.length; i++) {
        var newList = document.createElement("li");
        newList.textContent = highScore[i].initials + " " + highScore[i].score;
        scoreList.appendChild(newList);
        scoreList.appendChild(document.createElement("br"))
    }
}