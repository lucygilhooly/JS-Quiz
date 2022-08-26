"use strict";

//CLICK TO PLAY BUTTON
//FIRST, grab from HTML
var playButton = document.querySelector('#start-btn');
var questionContainer = document.querySelector(".container__question");
var actualQuestion = document.querySelector('#question');
var answerButtons = document.querySelector('.btn-grid');
var nextButton = document.querySelector('#next-btn'); // new undefined variables to help with ordering questions

var shuffledQuestions = undefined;
var currentQuestionIndex = undefined; //then, create a function for it to perform
// so here the screen will clear and the title will be replaced with a question 

var startGame = function startGame() {
  console.log("let the games begin!");
  playButton.classList.add('hide');
  shuffledQuestions = questions.sort(function () {
    return Math.random();
  }); //possibly add in -.5, to give us a number above or below zero 50% of the time. Unsure if necessary

  currentQuestionIndex = 0;
  questionContainer.classList.remove('hide');
  setNextQuestion();
}; //& then create an event listener so when button is pressed the function is executed 


playButton.addEventListener("click", startGame);
nextButton.addEventListener("click", function () {
  currentQuestionIndex++;
  setNextQuestion();
}); // and the button will be replaced with 4 buttons with multi choice answers !!!
//QUESTIONS 

var questions = [{
  question: "what is my name",
  answers: [{
    text: 'Lucy',
    correct: true
  }, {
    text: 'Sam',
    correct: false
  }, {
    text: 'Lottie',
    correct: false
  }, {
    text: 'Andrew',
    correct: false
  }]
}];

var setNextQuestion = function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
};

var showQuestion = function showQuestion(question) {
  actualQuestion.innerText = question.question;
  question.answers.forEach(function (answer) {
    var button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
};

var resetState = function resetState() {
  clearAnswerResult(document.body);
  nextButton.classList.add('hide');

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
};

var selectAnswer = function selectAnswer(event) {
  var selectedButton = event.target;
  var correct = selectedButton.dataset.correct;
  setAnswerResult(document.body, correct);
  Array.from(answerButtons.children).forEach(function (button) {
    setAnswerResult(button, button.dataset.correct);
  });

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    playButton.innerText = 'Restart';
    playButton.classList.remove('hide');
  }
};

var setAnswerResult = function setAnswerResult(element, correct) {
  clearAnswerResult(element);

  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('incorrect');
  }
};

var clearAnswerResult = function clearAnswerResult(element) {
  element.classList.remove('correct');
  element.classList.remove('incorrect');
}; //figure out how to keep score? 
//maybe add function to an event listener that if correct answer is pressed a point is recorded 
//this would be stored in an array and should be displayed onscreen too
//also want a home button to permanantly be displayed at the top