var currentQuestion =0;
var score =0;
var totQuestions= questions.length;

var container= document.getElementById('quizContainer');
var questionEL= document.getElementById('question');
var opt1= document.getElementById('opt1');
var opt2= document.getElementById('opt2');
var opt3= document.getElementById('opt3');
var nextButton= document.getElementById('nextButton');
var resultCont= document.getElementById('result');

funtion loadQuestion (questionIndex) {
  var q= questions[questionIndex];
  questionEL.textContent= (questionIndex +1)+ '.'+q.question;
  opt1.textContent= q.option1;
  opt2.textContent= q.option2;
  opt3.textContent= q.option3;
};

function 
