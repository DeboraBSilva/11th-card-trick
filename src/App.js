import "./App.css";
import CardRows from "./components/cardRows";
import buildDeck from "./utils/buildDeck";
import SelectCards from "./utils/selectCards";
import shuffleDeck from "./utils/shuffleDeck";

function App() {
  const DECK = buildDeck();
  const SHUFFLED_DECK = shuffleDeck(DECK);
  const SELECTED_CARDS = SelectCards(SHUFFLED_DECK);

  return (
    <div className="App">
      <CardRows deck={SELECTED_CARDS} />
    </div>
  );
}

export default App;
