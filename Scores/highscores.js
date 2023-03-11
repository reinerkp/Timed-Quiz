var storage = JSON.parse(localStorage.getItem('quizScores'));
var scoresContainer = document.querySelector('.scores');
if (storage === null) {
    var h3 = document.createElement('h3');
    h3.textContent = "No Highscores";
    scoresContainer.append(h3);
} else {
    scoresContainer.textContent = '';
    for (var i = 0; i < storage.length; i++) {
        var p = document.createElement('p');
        p.textContent = "Name: " + storage[i].name +  " ----- Score: " + storage[i].finalScore;
        scoresContainer.append(p);
    }
}