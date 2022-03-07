const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
const cardValues = [
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
  return suits.flatMap((suit) => {
    return cardValues.map((cardValue) => {
      return { suit, cardValue };
    });
  });
}

export default buildDeck;
