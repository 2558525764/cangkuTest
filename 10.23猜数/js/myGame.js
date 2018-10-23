var randomNumber=(Math.floor(Math.random()*101));
//  console.log(randomNumber);//控制台输出。
var guessField = document.querySelector('.guessField');
 console.log(guessField);//储存答案。
var guesses = document.querySelector('.guesses');
console.log(guesses);
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessCoutn= 1;
var resetButton;
guessField.focus();
function checkGuess(){
guesses.innerHTML+= guessField.value+" ";
guesses.style.backgroundColor="red";

} //检查(checkGuess)，猜数
// checkGuess();//调用这个。
guessSubmit .addEventListener ('click',checkGuess)
