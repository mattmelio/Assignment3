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

var model  = [
    {
      name: "HTML Quiz",
      expertise : "Mobile Computing, Computer Systems",
      profile : "https://scholar.google.co.in/citations?user=OsCNwzEAAAAJ&hl=en"
    },
    {
      name: "HTML Quiz",
      expertise : "Mobile Computing, Computer Systems",
      profile : "https://scholar.google.co.in/citations?user=OsCNwzEAAAAJ&hl=en"
    },
  ];




var render_view = (view_id, model_index) => {
  console.log("Rendering View");
  var source = document.querySelector(view_id).innerHTML;
  var template = Handlebars.compile(source);
  var html = template(model[model_index]);

  document.querySelector("#view_widget").innerHTML = html;
}

