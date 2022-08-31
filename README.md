# JS-Quiz

This is a quiz all about sharks which is made up of html, CSS and JavaScript.

It is a multiple choice quiz with one right answer per round. Comprised of 6 questions currently and the aim of the game is to get as many of the multiple choice questions correct as possible.

To store the questions I used an array of objects and signified the correct answer as a boolean. Upon clicking the correct answer the tab will show green, as will the background to indicate one point. If you were to click the incorrect answer the background and all incorrect answers will flash red with the correct answer being shown in green.

The next button acts to move you through the quiz, essentially iterating through the array until you reach the end in which case you have the option to restart. 

There is a home button displayed for the duration of the game which when clicked will refresh the screen and bright you back to the home page which reads 'How much do you know about sharks?'.

With further development of this game I would hope to further finely tune the way correct and incorrect answers are shown with only the currently incorrect answer being displayed instead of showing the state of each multi choice answer. I would also like to have a finishing page telling you total score alongside a congratulations or comiserations message.

One thing I struggled with was the responsiveness element, it needs to be properly formatted to suit a mobile and desktop device. I have also struggled to add a score counter to the game.


