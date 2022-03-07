function Card({ card }) {
  return (
    <div>
      <div className="Card">
        {card.cardValue} of {card.suit}
      </div>
    </div>
  );
}

export default Card;
