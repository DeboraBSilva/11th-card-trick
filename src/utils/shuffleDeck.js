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

export default shuffleDeck;
