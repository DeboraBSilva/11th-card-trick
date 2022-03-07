function Card({ card }) {
  return (
    <div>
      <div>
        {card.cardValue} of {card.suit}
      </div>
    </div>
  );
}

export default Card;
