//CLICK TO PLAY BUTTON
//FIRST, grab from HTML

const playButton = document.querySelector('#start-btn');
const questionContainer = document.querySelector(".container__question");

//then, create a function for it to perform
// so here the screen will clear and the title will be replaced with a question 
const startGame = () => {
    console.log("let the games begin!")
    playButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    setNextQuestion()

}

//& then create an event listener so when button is pressed the function is executed 
playButton.addEventListener("click", startGame);


// and the button will be replaced with 4 buttons with multi choice answers !!!


//QUESTIONS 

//const setNextQuestion() => {
    
//}

// const selectAnswer() => {

// }





// will need a function which changes the screen to the next (can possibly be reused when hitting the next question button)

// question screen should display an image and 4 options, one of them being correct. 
// will store all questions within an array as objects
//if else statement with booleans for correct or incorrect answers 


//figure out how to keep score? 
//maybe add function to an event listener that if correct answer is pressed a point is recorded 
//this would be stored in an array and should be displayed onscreen too



//also want a home button to permanantly be displayed at the top 

