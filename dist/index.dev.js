"use strict";

//import array from separate sheet - gots to keep her tidy
// import {
//     questions
// } from './questions.js';
//CLICK TO PLAY BUTTON
//FIRST, grab from HTML
var playButton = document.querySelector('#start-btn');
var questionContainer = document.querySelector(".container__question");
var actualQuestion = document.querySelector('#question');
var answerButtons = document.querySelector('.btn-grid');
var nextButton = document.querySelector('#next-btn');
var homeImg = document.querySelector('.home-image');
var heading = document.querySelector('.heading'); // new undefined variables to help with ordering questions

var shuffledQuestions = undefined;
var currentQuestionIndex = undefined; //then, create a function for it to perform
// so here the screen will clear and the title will be replaced with a question 

var startGame = function startGame() {
  heading.classList.add('hide');
  homeImg.classList.add('hide');
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
  question: "Which species of shark is the largest fish in the world?",
  answers: [{
    text: 'Whale Shark',
    correct: true
  }, {
    text: 'Bull Shark',
    correct: false
  }, {
    text: 'Tiger Shark',
    correct: false
  }, {
    text: 'Great White Shark',
    correct: false
  }]
}, {
  question: 'Sharks are the sister group or close relatives to which ocean animal?',
  answers: [{
    text: 'Whales',
    correct: false
  }, {
    text: 'Dolpihns',
    correct: false
  }, {
    text: 'Eels',
    correct: false
  }, {
    text: 'Rays',
    correct: true
  }]
}, {
  question: 'Which term refers to group of sharks?',
  answers: [{
    text: 'A School',
    correct: false
  }, {
    text: 'A Shoal',
    correct: true
  }, {
    text: 'A Squad',
    correct: false
  }, {
    text: 'A Sharklet',
    correct: false
  }]
}, {
  question: 'Approximately how long have sharks been existing on Earth?',
  answers: [{
    text: '10,000 years',
    correct: false
  }, {
    text: '40 billion years',
    correct: false
  }, {
    text: '350 million years',
    correct: true
  }, {
    text: '2 million years',
    correct: false
  }]
}, {
  question: 'Who directed the 1975 thriller movie "Jaws"?',
  answers: [{
    text: 'Steven Spielberg',
    correct: true
  }, {
    text: 'Quentin Tarantino ',
    correct: false
  }, {
    text: 'David Fincher',
    correct: false
  }, {
    text: 'Alfred Hitchcock',
    correct: false
  }]
}, {
  question: 'Which of the following is true about bull sharks?',
  answers: [{
    text: 'they eat plants',
    correct: false
  }, {
    text: 'they can survive out of water',
    correct: false
  }, {
    text: 'they are known to befriend other species',
    correct: false
  }, {
    text: 'they can survive in fresh water',
    correct: true
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
  var score = 0;
  clearAnswerResult(element);

  if (correct) {
    element.classList.add('correct');
    score++;
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
//<script type="text/javascript">
// var score = 0;
// function fsubmit() 
// {
//     var correct1 = document.getElementById("a1")
//     if (correct1.checked === true) 
//     {
//         score ++;
//     }
//     var correct2 = document.getElementById("b4")
//     if (correct2.checked === true) 
//     {
//         score ++; 
//     }           
// }
// And here
//</script>
//<script>
// var messages = {
//     6: "Bad luck",
//     7: "Great job!"
// }
// document.getElementById("message").innerHTML = messages[score];
// </script>
//also want a home button to permanantly be displayed at the top