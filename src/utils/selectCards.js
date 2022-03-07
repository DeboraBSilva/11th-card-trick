function SelectCards(deck) {
  const FIRST_CARD = 0;
  const TOTAL_CARDS = 21;
  return deck.slice(FIRST_CARD, TOTAL_CARDS);
}

export default SelectCards;
