const SUITS = ["Hearts", "Spades", "Diamonds", "Clubs"];
const CARD_VALUES = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

function buildDeck() {
  return SUITS.flatMap((suit) => {
    return CARD_VALUES.map((cardValue) => {
      return { suit, cardValue };
    });
  });
}

function shuffleDeck(deck) {
  const list = [...deck];
  const shuffledDeck = [];
  for (let i = list.length; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * i);
    shuffledDeck.push(list[randomIndex]);
    list.splice(randomIndex, 1);
  }
  return shuffledDeck;
}

function selectCards(deck) {
  const FIRST_CARD = 0;
  const TOTAL_CARDS = 21;
  return deck.slice(FIRST_CARD, TOTAL_CARDS);
}

function resetTrick() {
  const deck = buildDeck();
  const shuffledDeck = shuffleDeck(deck);
  return selectCards(shuffledDeck);
}

export { resetTrick };
