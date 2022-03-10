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

export default buildDeck;
