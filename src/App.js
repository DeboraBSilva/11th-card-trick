import "./App.css";
import { useState } from "react";
import CardRows from "./components/cardRows";
import Result from "./components/result";
import { buildDeck, shuffleDeck, selectCards } from "./utils/deck";

function App() {
  const DECK = buildDeck();
  const SHUFFLED_DECK = shuffleDeck(DECK);
  const SELECTED_CARDS = selectCards(SHUFFLED_DECK);
  const [chosenCard, setChosenCard]= useState()

  return (
    <div className="App">
      {!chosenCard
        ? <CardRows deck={SELECTED_CARDS} setChosenCard={setChosenCard}/>
        : <Result chosenCard={chosenCard}/>
      }
    </div>
  );
}

export default App;
