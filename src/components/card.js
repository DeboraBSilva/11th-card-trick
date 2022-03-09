function Card({ card }) {
  return (
    <div>
      <div role="card" className="Card">
        {card.cardValue} of {card.suit}
      </div>
    </div>
  );
}

export default Card;
