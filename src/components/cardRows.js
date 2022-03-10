import Deck from "./deck";

function CardRows({ deck }) {
  const CARDS_PER_ROW = 7;
  let firstCardIndex = 0;
  const rows = [];

  for (let i = 1; i <= 3; i++) {
    rows.push(<Deck key={i} id={i} deckList={deck.slice(firstCardIndex, firstCardIndex + CARDS_PER_ROW)} />);
    firstCardIndex += CARDS_PER_ROW;
  }

  return <div className="CardRows">{rows}</div>;
}

export default CardRows;
