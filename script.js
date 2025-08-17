// BOM usage
alert("Welcom to the  math game !");

// Select with getElementById
const numberDisplay = document.getElementById('random-number');
const form = document.getElementById('game-form');
const messageContainer = document.querySelector('#message-container'); // querySelector

// Variables globales
let currentNumber;

// Generate a new number
function generateNumber() {
  currentNumber = Math.floor(Math.random() * 11);
  numberDisplay.textContent = `Number: ${currentNumber}`;
}
