let firstCard = 10;
let secondCard = 7;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = '';
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");




function startGame() {
  renderGame();
}


function renderGame() {
  cardsEl.textContent = `Cards: ${cards[0]} - ${cards[1]}`;
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


function newCard() {
  let card = 4;
  sum += card;

  renderGame();
}

