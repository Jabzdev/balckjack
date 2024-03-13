let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = '';
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");




function startGame() {
  sumEl.textContent = `sum: ${sum}`;
  if (sum <= 20) {
    message = 'Do you want to draw a new card?';
  }
  else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackjack = true;
  }
  else {
    message = "You're out of the game!";
    isAlive = false;
  }
  
  messageEl.textContent = message;
}

