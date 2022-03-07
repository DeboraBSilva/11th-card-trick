import Card from "./card";

function Deck({ deckList }) {
  const deck = deckList.map((n, index) => <Card key={index} card={n}/>)
  return (
    <div>
      {deck}
    </div>
  )
}

export default Deck