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

// Factorial
function factorial(n) {
  if (n < 0) return 0;
  return n === 0 ? 1 : n * factorial(n - 1);
}

// Background changes with each correct answer
function changeBackground() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

// Validation
form.addEventListener('submit', e => {
  e.preventDefault();

   //DOM  Navigation 
  const squareInput = form.firstElementChild.nextElementSibling;
  const sqrtInput = squareInput.nextElementSibling.nextElementSibling;
  const factorialInput = sqrtInput.nextElementSibling.nextElementSibling;

  const squareVal = parseInt(squareInput.value);
  const sqrtVal = parseFloat(sqrtInput.value);
  const factorialVal = parseInt(factorialInput.value);

  const isPerfectSquare = Number.isInteger(Math.sqrt(currentNumber));
  const correctSquare = currentNumber * currentNumber;
  const correctSqrt = Math.sqrt(currentNumber);
  const correctFactorial = factorial(currentNumber);

  let score = 0;

  if (!isPerfectSquare && squareVal === correctSquare) {
    score++;
  }

  if (isPerfectSquare && sqrtVal === correctSqrt) {
    score++;
  }

  if (currentNumber <= 9 && factorialVal === correctFactorial) {
    score++;
  }

  // Reset inputs
  squareInput.value = '';
  sqrtInput.value = '';
  factorialInput.value = '';

  // Feedback
  const fragment = document.createDocumentFragment();
  const message = document.createElement('p');
  if (score > 0) {
    message.textContent = `Good job ! ${score} correct(s) answer(s)`;
    message.classList.add('success');
    changeBackground();
  } else {
    message.textContent = "Incorrect. try again.";
    message.setAttribute("id", "error-message");
  }

   // Delete old message
  messageContainer.innerHTML = '';
  fragment.appendChild(message);
  messageContainer.appendChild(fragment);


})