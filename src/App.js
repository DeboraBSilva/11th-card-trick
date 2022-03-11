import "./App.css";
import CardRows from "./components/cardRows";
import { buildDeck, shuffleDeck, selectCards } from "./utils/deck";

function App() {
  const DECK = buildDeck();
  const SHUFFLED_DECK = shuffleDeck(DECK);
  const SELECTED_CARDS = selectCards(SHUFFLED_DECK);

  return (
    <div className="App">
      <CardRows deck={SELECTED_CARDS} />
    </div>
  );
}

export default App;
