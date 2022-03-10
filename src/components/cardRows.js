import { useState } from "react";
import ChooseRow from "../utils/chooseRow";
import SetRows from "../utils/setRows";
import Deck from "./deck";

function CardRows({ deck }) {
  const [rowsList, setRowsList] = useState(SetRows(deck));
  let [stepTrick, setStepTrick] = useState(0);

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
          }}
        >
          {index + 1}
        </button>
        <Deck key={`deck-${index}`} id={index} deckList={n} />
      </div>
    );
  });

  return <div className="CardRows">{rows}</div>;
}

export default CardRows;
