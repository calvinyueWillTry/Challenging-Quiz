var questionnaireOrder = 0;
// quiz begins from the 1st question
var timePer = questionnaire.length * 10;
// 10 seconds per quiz question
var timeQuiz = 30;
// start and end the timer

var homePage = document.getElementById("firstPage");
// The HomePage when the quiz begins
var startPage = document.getElementById("top");
//header of the 1st page
var midPage = document.getElementById("instructions");
//body with instructions
var gameStart = document.getElementById("beginGame");
// change to the quiz page
var startButton = document.getElementById("start");
startButton.addEventListener('click', beginQuiz);

// the button to change to the quiz page
var scores = document.getElementById("scorelist");
// navigation link to change pages to the scoresheet
var hideHomePage = document.getElementById("questionBox");
// hide HomePage when the quiz begins
var timeSpan = document.getElementById("time");
var quizSection = document.getElementById("questionnaire");
// Quiz section
var choices = document.getElementById("answerBelow");
// Place to select an answer to the quiz 
var timeBlock = document.getElementById("timeClock");
var responds = document.getElementById("response");
var Scoring = document.getElementById('quizScore');
var typeName = document.getElementById('inputText'); //from input value to string

let timeTotal;
//This variable allows for the input of name to be attached to the score
var newScore={
    name:"",
    scored:0
}
function beginQuiz() {
    // hide the homepage, and change to the quiz page
    homePage.setAttribute('class', 'hidden');
    scores.setAttribute('class', 'hidden');
    hideHomePage.removeAttribute('class');
     timeTotal = setInterval( function() {
        if (timeQuiz >= 0) {
            timeBlock.innerHTML = timeQuiz;
            timeQuiz = timeQuiz - 1;
        }
        else {
            clearInterval(timeTotal);
        }
    }, 1000);
    getTheQuestion();
}

function getTheQuestion () {
    //New variable to pull quiz in order
    var currentQuestion = questionnaire[questionnaireOrder];
    //puts quesion in title section
    quizSection.textContent = currentQuestion.title;
    // tells it to continue sequentially. 
    choices.innerHTML = '';
    // Continue with looping the answers below (not questions). 0 means multiple choice #1
    for (var i = 0; i < currentQuestion.choices.length; i++ ) {
        //the answerBelow section. Arranges quiz in order based on sequence
        let choicesDiv = document.createElement('div');
        var choosing = currentQuestion.choices[i];
        // are these the classes from HTML? no, it's CSS
        var choiceButtons = document.createElement('button');
        //the attributes referring to CSS class
        //choiceButtons.setAttribute('class',  choices);
        choiceButtons.setAttribute('value', i);
        choiceButtons.textContent = `${i + 1} - ` + choosing;
        // Allows 1 - "multiple choice" Then adds that section.
        // append means replacing at the end, whereas appendChild is adding onto what's there
        choicesDiv.append(choiceButtons);
        choices.append(choicesDiv);
        //only the buttons get click.
        //onclick makes program choose for the user
        choiceButtons.addEventListener('click', answerSelect);
        
    }
}

// To Begin the Quiz
//don't need () the 2nd time
function answerSelect(event) {
    
    // only selecting one of the 4 choices affects the page
    var buttonSelection = event.target;
    //console.log('a'); this will cause the a each time a click happens
    //console.log(buttonSelection); now will trigger event of clicking choices 1-4
    
    // The values here are strings, the answers are integers
    if (buttonSelection.value == questionnaire[questionnaireOrder].answer){
        // tell it to go to the next Index in questionnaire, before looping back to the function
        questionnaireOrder = questionnaireOrder ++;
        responds.textContent='Excellent! You know your stuff!';
        //Why +1 is only odd numbers, but ++ is incremental?
        //need function to check for last question (index #?) to end Array
        getTheQuestion();
        console.log('correct');
    }
    else { 
        //doesn't deduct time for wrong answer?
        timePer-= 10;
        responds.textContent='Sorry! You will get it next fime!';
        console.log('incorrect');
    }
    //Alert for right or wrong?
    //What defines the score?
    //if (buttonSelection.value !== questionnaire[questionnaireOrder].answer) {
    //    timePer-= 10;
    //}
    if (timePer < 0) {
        timePer = 0;
    }
    timeBlock.textContent = timeQuiz;
    //Why It doesn't recognize that quiz is over? 
    questionnaireOrder++
    if (timePer <= 0 || questionnaireOrder === questionnaire.length) {
        
        endTheQuiz ();
        
    }
    else {
        getTheQuestion ();
    }
}
//I already have the function clockTick at line 36?
if (timePer < 0){
    console.log('timePer < 0');
    endTheQuiz();
    
}
//function () can trigger it prematurely
function endTheQuiz() {
    console.log('function endTheQuiz');
    clearInterval(timeTotal);
    var gameComplete = document.getElementById('gameFinished');
    gameComplete.removeAttribute('class');
    //Doesn't hide the page or display score? 
    Scoring.textContent = timePer;
    hideHomePage.setAttribute('class', 'hidden');
}
//This i where I check the result of the quiz (quizScore), then push it into the records
let scoreRecord = localStorage.getItem(Scoring);
let codeName = typeName.toString('');
console.log(codeName,typeName);
//Check if there is anything inputted
//if (scoreRecord !== 0){
//    //Take whatever was inputted, and enter it into the scores list
//        scores.push(newScore)
//    }else{
    // Store it in the Applications under Inspect
//        scores=[newScore]
//    }
// Then the new score is stored here, and then the name with it is next inputted under inputScore ()
//localStorage.setItem(codeName, Scoring);
//console.log('store')

//highscores.push(newScore);
//    window.localStorage.setItem('highscores', JSON.stringify(highscores));
//function allowEntering (event){
//    if (event.key === 'emter') {
//        inputScore ()
//    }
//}
function inputScore () {//This is where they input their name
    
    var saveName = typeName.value.trim();
    if (saveName !== 0) {
       // var scoringRankings = JSON.parse(window.localStorage.getItem(scoresRanking));
       var recentScores = localStorage.getItem('highscores');
       console.log('highscores', recentScores);
       //'highscores' is a key, not needing to originally be HTML 
       newScore.name = saveName;
       newScore.scored = timePer;
       localStorage.setItem('highscores', JSON.stringify(newScore));
        //var recentScore = {
        //    score:timePer;  
        //    initials.initials;
        window.location.replace("./scoresheet.html");
        }
    }
var endingButton = document.getElementById("endbutton");
endingButton.addEventListener('click', function saveScore() {
    console.log('hello score')
    //var scoringRankings = JSON.parse(localStorage.getItem(codeName, Scoring));
    //Local storage always converts strings, so needs to be reconverted to an array
    console.log('?score?', timePer)
    //inputScore(scoringRankings)
    inputScore();
});
var navButton = document.getElementById("highlightButton");
navButton.addEventListener('click', function navScoresheet () {
    window.location.replace("./scoresheet.html");
});
    //var endingButton = document.getElementById("endbutton");
    //endingButton.addEventListener('click',endTheQuiz);
//}