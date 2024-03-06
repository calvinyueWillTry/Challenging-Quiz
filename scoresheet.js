console.log('hi')
var reveal = document.getElementById("gameFinished");
var prScore = document.getElementById("quizScore");
var yourName = document.getElementById("inputText");
var pageChange = document.getElementById("questionBox");

    //Local storage always converts strings, so needs to be reconverted to an array
    
var button = document.getElementById("tryAgain");
button.addEventListener('click', function returnHomePage (){
    // still not navigating back to the homepage
    window.location.replace("./index.html")});
//Latest try below
//var scoreRankings = document.getElementById("scoresNames");
//var scoringRankings = JSON.parse(localStorage.getItem(Scoring));
//pageChange.setAttribute('class', 'hidden');
//function displayScores (scoreRankings) {
//Have scores inserted in the scoresNames column, which will be sorted based on if the one before is greater than the one after it
//for (var i = 0; i < scoresRanked.length; i += 1);
//    scoreRankings.append(scoringRankings.textContext = `${i + 1} - `+ yourName + prScore);
//    scoringRankings.sort(function(a, b)) {
//        return b.score - a.score;
//    };
    //Will this return a proper comparison of the scores?
    //How to ensure that array properly compares scores < vs. > ? 
//};



    //for (var i = 0; i < scoresRanked.length; i += 1) {
        //What is liTag? }

//function backtoHome () {
//    button.addEventListener('click', )
//    console.log(button)
//    window.location.replace("./index.html")
//};



    //Creating table
//    var tableScores = document.createElement('scoresRanking');
 //   var tableScoresChild = document.createElement('scoreTable');
//for (let i = 0; i < 2; i++) {
    //create rows
 //   const cellRow = document.createElement('row');
//for (let j = 0; j < 2; j++) {
 //  var cellBox = document.createElement('cell');
//   var cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
//   cell.appendChild(cellText);
//   cellRow.appendChild(cellBox);

//tableScoresChild.appendChild(cellRow);
//tableScores.appendChild(tableScoresChild);
//document.body.appendChild(tableScores);
//tableScores.setAttribute("border", "2");

