let cards = [];
let flippedCards = [];
let matchedCards = [];
let numPairs =6

function createCards() {
    for (let i = 1; i <= numPairs; i++) {
        cards.push(i);
        cards.push(i);
    }
    cards = shuffleArray(cards);

    const grid = document.getElementById('grid');
    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.cardIndex = i;
        card.textContent = '!'
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}

function flipCard() {
    if (flippedCards.length < 2 && !flippedCards.includes(this)) {
        this.textContent = cards[this.dataset.cardIndex];
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.textContent === card2.textContent) {
        matchedCards.push(card1, card2);
        if (matchedCards.length === cards.length) {
            alert('Congratulations! You won!');
        }
    } else {
        card1.textContent = card2.textContent = '!';
    }
    flippedCards = [];
}

function resetGame() {
    cards = [];
    flippedCards = [];
    matchedCards = [];
    document.getElementById('grid').innerHTML = '';
    createCards();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

createCards();
