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
    console.log("let the games begin!")
    playButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() ); //possibly add in -.5, to give us a number above or below zero 50% of the time. Unsure if necessary
    currentQuestionIndex = 0 ;
    questionContainer.classList.remove('hide');
    setNextQuestion()
}

//& then create an event listener so when button is pressed the function is executed 
playButton.addEventListener("click", startGame);


// and the button will be replaced with 4 buttons with multi choice answers !!!


//QUESTIONS 

const questions = [
    {question: "what is my name",
        answers: [
            { text: 'Lucy', correct: true },
            { text: 'Sam', correct: false },
            {text: 'Lottie', correct: false},
            {text: 'Andrew', correct: false}
            ]
    }
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
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


const selectAnswer = (event) => {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;
}





// will need a function which changes the screen to the next (can possibly be reused when hitting the next question button)

// question screen should display an image and 4 options, one of them being correct. 
// will store all questions within an array as objects
//if else statement with booleans for correct or incorrect answers 


//figure out how to keep score? 
//maybe add function to an event listener that if correct answer is pressed a point is recorded 
//this would be stored in an array and should be displayed onscreen too



//also want a home button to permanantly be displayed at the top 

