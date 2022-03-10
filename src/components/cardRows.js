import { useState } from "react";
import ChooseRow from "../utils/chooseRow";
import findChosenCard from "../utils/findChosenCard";
import SetRows from "../utils/setRows";
import Deck from "./deck";

function CardRows({ deck, setChosenCard }) {
  const [rowsList, setRowsList] = useState(SetRows(deck));
  const [stepTrick, setStepTrick] = useState(0);

  const rows = rowsList.map((n, index) => {
    return (
      <div key={index}>
        <button
          key={`button-${index}`}
          id={index}
          className="rowButton"
          onClick={() => {
            setRowsList(ChooseRow(rowsList, index));
            setStepTrick(stepTrick + 1);
            setChosenCard(findChosenCard(rowsList, stepTrick)); // TODO wait for stepTrick update,stepTrick must start at 1 and update card in stepTrick 3            console.log(stepTrick);
          }}
        >
          {index + 1}
        </button>
        <Deck key={`deck-${index}`} id={index} deckList={n} />
      </div>
    );
  });

  return (
    <div className="CardRows">
      <h1>Which row your card is in?</h1>
      {rows}
    </div>
  );
}

export default CardRows;
