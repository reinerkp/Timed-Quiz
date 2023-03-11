
//create variables for qustions, correct and incorrect, timer, and start button
var correct = document.querySelector(".correct")
var incorrect = document.querySelector(".incorrect")
var timerElemet = document.querySelector(".timer-count")
var startButton = document.querySelector(".start-button")
var submitButton = document.querySelector("#submit")
var currentQuestion = 0
var correctCount = 0
var incorrectCount = 0
var score = 0
var answer1Button = document.querySelector("#answer1")
var answer2Button = document.querySelector("#answer2")
var answer3Button = document.querySelector("#answer3")
var answer4Button = document.querySelector("#answer4")
var mainContainer = document.querySelector("#mainDiv")

//create init function 
//create a startGame funtions 
//create questions

//creat questions 

var allQuestions = {
    'Which of the following is not an operator in JavaScript?': ['&&','!', '??', '***',3],
    'Tripple Equals (===) is known as which of the following?': ['Strict Equality', 'Strong Equality', 'Stressed Equality', 'Static Equality', 0],
    'Which is not a state of a promise?': ['Pending', 'Fulfilled', 'Declined', 'Settled', 2],

};
// a funtion to load the quetions
function loadQuestion() {
    //alert('Starting Quiz');
    var question = Object.keys(allQuestions)[currentQuestion];
    var answers = Object.values(allQuestions)[currentQuestion];
    var answer1Text = answers[0];
    var answer2Text = answers[1];
    var answer3Text = answers[2];
    var answer4Text = answers[3];

   // alert(question);
    //makes the timer start from the first question
    if(currentQuestion==0){
        window.setTimeout(timeExpires, 10000);
    }
    var questionPara = document.getElementById("questionpara");
    questionPara.innerHTML = question;
    answer1Button.innerHTML = answer1Text;
    answer2Button.innerHTML = answer2Text;
    answer3Button.innerHTML = answer3Text;
    answer4Button.innerHTML = answer4Text;
}

function answerQuestion (){
  currentQuestion++;
  if (currentQuestion < 3) {
    loadQuestion();
  }
  else {
    endQuiz()
  }
}

//gives an alert when the timer is up
function timeExpires (){
    //alert('time expires');
}

function selectAnswer (event){
    var eleCorrect = document.getElementById("correct");
    var eleIncorrect = document.getElementById("incorrect");
    var answers = Object.values(allQuestions)[currentQuestion];
    var correctAnswer = answers[4];
    var answerChosen = event.target.innerText
    var answerChosenIndex = answers.indexOf(answerChosen)
    
    console.log(answerChosenIndex)
    if (correctAnswer === answerChosenIndex) {
        correctCount++;
    }
    else {
        incorrectCount++;
    }
    eleCorrect.innerHTML = correctCount;
    eleIncorrect.innerHTML = incorrectCount;

    answerQuestion();
}

function submitScore (){
    var initials = document.querySelector("#enterInitialsTextArea");
}
//once clicked it start the quiz
startButton.addEventListener("click", loadQuestion);
answer1Button.addEventListener("click", selectAnswer);
answer2Button.addEventListener("click", selectAnswer);
answer3Button.addEventListener("click", selectAnswer);
answer4Button.addEventListener("click", selectAnswer);
submitButton.addEventListener("click", submitScore);

function endQuiz() {
    mainContainer.textContent = ''
    var inputEl = document.createElement('input')
    inputEl.setAttribute('placeholder', 'Name')
    var submitBtn = document.createElement('button')
    submitBtn.textContent = "SUBMIT"
    mainContainer.append(inputEl, submitBtn)
    submitBtn.addEventListener('click', function() {
        var userData = {
            name: inputEl.value,
            finalScore: correctCount
        };
        var storage = JSON.parse(localStorage.getItem('quizScores'))
        if(storage === null) {
            storage = []
        }
        storage.push(userData)
        localStorage.setItem('quizScores', JSON.stringify(storage))
        window.location.href = "./Scores/highscores.html"
    })
}




    
    




//create a correct answer function 
//creat an incorrect answer funtion 

//create a local storage of saved scores 
// add an event listener