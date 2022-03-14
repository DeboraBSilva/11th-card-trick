import Card from "./Card";

function Deck({ deckList }) {
  const deck = deckList.map((n, index) => <Card key={index} card={n} />);
  return <div className="Deck">{deck}</div>;
}

export default Deck;
