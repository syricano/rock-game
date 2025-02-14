/**
Options and Choices 
**/
const options = ['rock','paper', 'scessor' ];
console.log(options);

/* User Choice */
const playerChoice = prompt(" Enter your Choice: rock, paper, scessor").toLowerCase();
console.log(playerChoice);

/* Computer Choice */
const computerChoice = Math.floor(Math.random() * options.length); // To make the computer choice random and an integer
console.log(computerChoice);

/**
 * Game Logic
 */
