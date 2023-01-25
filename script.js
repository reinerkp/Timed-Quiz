
//create variables for qustions, correct and incorrect, timer, and start button
var correct = document.querySelector(".correct")
var incorrect = document.querySelector(".incorrect")
var timerElemet = document.querySelector(".timer-count")
var startButton = document.querySelector(".start-button")
var currentQuestion = 0
var answer1Button = document.querySelector("#answer1")
var answer2Button = document.querySelector("#answer2")
var answer3Button = document.querySelector("#answer3")
var answer4Button = document.querySelector("#answer4")
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
function answerQueSstion (){
  currentQuestion++; 
  loadQuestion();
}

function selectAnswer1 (){
    var answers = Object.values(allQuestions)[currentQuestion];
    var correctAnswer = answers[4];
    var correct = false;
    if (correctAnswer == 0) {
        correct = true;
    }
    alert('correct '+ correct);
    answerQuestion();

}

function selectAnswer2 (){
    var answers = Object.values(allQuestions)[currentQuestion];
    var correctAnswer = answers[4];
    var correct = false;
    if (correctAnswer == 1) {
        correct = true;
    }
    alert('correct '+ correct);
    answerQuestion();

}

function selectAnswer3 (){
    var answers = Object.values(allQuestions)[currentQuestion];
    var correctAnswer = answers[4];
    var correct = false;
    if (correctAnswer == 2) {
        correct = true;
    }
    alert('correct '+ correct);
    answerQuestion();

}

function selectAnswer4 (){
    var answers = Object.values(allQuestions)[currentQuestion];
    var correctAnswer = answers[4];
    var correct = false;
    if (correctAnswer == 3) {
        correct = true;
    }
    alert('correct '+ correct);
    answerQuestion();

}

//gives an alert when the timer is up
function timeExpires (){
    alert('time expires');
}


//once clicked it start the quiz
startButton.addEventListener("click", loadQuestion);
answer1Button.addEventListener("click", selectAnswer1);
answer2Button.addEventListener("click", selectAnswer2);
answer3Button.addEventListener("click", selectAnswer3);
answer4Button.addEventListener("click", selectAnswer4);





    
    // Start the quiz right away

    



//create a correct answer function 
//creat an incorrect answer funtion 
//create a timer function 
//create a local storage of saved scores 
// add an event listener