import "./App.css";
import { useState } from "react";
import CardRows from "./components/cardRows";
import Result from "./components/result";
import { resetTrick } from "./utils/deck";

function App() {
  const [selectedCards, setSelectedCards] = useState(resetTrick());
  const [chosenCard, setChosenCard] = useState();

  return (
    <div className="App">
      {!chosenCard ? (
        <CardRows deck={selectedCards} setChosenCard={setChosenCard} />
      ) : (
        <Result
          chosenCard={chosenCard}
          setChosenCard={setChosenCard}
          setSelectedCards={setSelectedCards}
        />
      )}
    </div>
  );
}

export default App;
