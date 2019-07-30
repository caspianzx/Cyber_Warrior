# Project-1-Cyber Warrior

Game Instruction:

3 viruses have invaded your computer! 
You have only 60 seconds to destroy them by typing the given words or else they will destroy your computer!


Game logic:

This game is based of a speed typer game where user will have to type the words given within a specific time to win.  

It is created largely using JavaScript, HTML, DOM manipulation, event listeners and CSS animations. 

User input will be verified with a word bank upon pressing enter. If successful, a new word will be random generated from the word bank and rendered on the browser using DOM manipulation. If unsuccessful, the input form will shake and turn orange (using CSS animation) to signal user than input is unsuccessful.

For each successful input, the virus's health point will be deduced. Once it reaches 0, a new virus will appear. 

Meanwhile, the 60 seconds countdown timer is programmed using setTimeout function and DOM manipulation. Once it reaches 0, the JavaScript function will determine if the viruses are still alive. If there are still viruses, user will lose. If viruses are destroyed before it reaches 0, user will win. 