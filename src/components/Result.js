import { resetTrick } from "../utils/deck";
import Card from "./Card";

function Result({ chosenCard, setChosenCard, setSelectedCards }) {
  return (
    <div data-testid="result">
      <h1>Is this your card? ;)</h1>
      <Card card={chosenCard} />
      <button
        className="button--resetTrick"
        onClick={() => {
          setSelectedCards(resetTrick());
          setChosenCard();
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Result;
