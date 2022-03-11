import { useState } from "react";
import findChosenCard from "../utils/findChosenCard";
import { reorderRows, setRows } from "../utils/rows";
import Deck from "./Deck";

function CardRows({ deck, setChosenCard }) {
  const [rowsList, setRowsList] = useState(setRows(deck));
  const [stepTrick, setStepTrick] = useState(0);

  const rows = rowsList.map((n, index) => {
    return (
      <div key={index}>
        <button
          key={`button-${index}`}
          id={index}
          className="rowButton"
          onClick={() => {
            const newRowsList = reorderRows(rowsList, index);
            setRowsList(newRowsList);
            const newStepTrick = stepTrick + 1;
            setStepTrick(newStepTrick);
            setChosenCard(findChosenCard(newRowsList, newStepTrick));
          }}
        >
          {index + 1}
        </button>
        <Deck key={`deck-${index}`} id={index} deckList={n} />
      </div>
    );
  });

  return (
    <div className="CardRows" data-testid="cardRows">
      <h1>Which row your card is in?</h1>
      {rows}
    </div>
  );
}

export default CardRows;
