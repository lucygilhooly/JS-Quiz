//import array from separate sheet - gots to keep her tidy

// import {
//     questions
// } from './questions.js';

//CLICK TO PLAY BUTTON
//FIRST, grab from HTML

const playButton = document.querySelector('#start-btn');
const questionContainer = document.querySelector(".container__question");
const actualQuestion = document.querySelector('#question');
const answerButtons = document.querySelector('.btn-grid');
const nextButton = document.querySelector('#next-btn');

// new undefined variables to help with ordering questions
let shuffledQuestions = undefined
let currentQuestionIndex = undefined

//then, create a function for it to perform
// so here the screen will clear and the title will be replaced with a question 
const startGame = () => {
    playButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random()); //possibly add in -.5, to give us a number above or below zero 50% of the time. Unsure if necessary
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion()
}

//& then create an event listener so when button is pressed the function is executed 
playButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
})

// and the button will be replaced with 4 buttons with multi choice answers !!!


//QUESTIONS 

const questions = [{
        question: "What is my Name?",
        answers: [{
                text: 'Lucy',
                correct: true
            },
            {
                text: 'Sam',
                correct: false
            },
            {
                text: 'Lottie',
                correct: false
            },
            {
                text: 'Andrew',
                correct: false
            }
        ]
    },
    {
        question: 'where am I from?',
        answers: [{
                text: 'London',
                correct: false
            },
            {
                text: 'Edinburgh',
                correct: false
            },
            {
                text: 'Machester',
                correct: false
            },
            {
                text: 'Glasgow',
                correct: true
            }
        ]
    },
    {
        question: 'how old am I?',
        answers: [{
                text: '21',
                correct: false
            },
            {
                text: '23',
                correct: true
            },
            {
                text: '30',
                correct: false
            },
            {
                text: '18',
                correct: false
            }
        ]
    },
    {
        question: 'how tall am I?',
        answers: [{
                text: '5ft5',
                correct: false
            },
            {
                text: '5ft2',
                correct: false
            },
            {
                text: '5ft9',
                correct: true
            },
            {
                text: '6ft',
                correct: false
            }
        ]
    },
]


const setNextQuestion = () => {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

const showQuestion = (question) => {
    actualQuestion.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });

}

const resetState = () => {
    clearAnswerResult(document.body);
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


const selectAnswer = (event) => {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;
    setAnswerResult(document.body, correct);
    Array.from(answerButtons.children).forEach(button => {
        setAnswerResult(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        playButton.innerText = 'Restart';
        playButton.classList.remove('hide');
    }

}


const setAnswerResult = (element, correct) => {
    clearAnswerResult(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }

}


const clearAnswerResult = (element) => {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}



//figure out how to keep score? 
//maybe add function to an event listener that if correct answer is pressed a point is recorded 
//this would be stored in an array and should be displayed onscreen too



//also want a home button to permanantly be displayed at the top 