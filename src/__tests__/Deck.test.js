import { render, screen } from "@testing-library/react";
import Deck from "../components/Deck";

describe("Deck Component", () => {
  test("renders all cards received through an array", () => {
    const MOCK_DECK = [
      { suit: "Hearts", cardValue: "Ace" },
      { suit: "Clubs", cardValue: "King" },
      { suit: "Spades", cardValue: "Five" },
    ];
    render(<Deck deckList={MOCK_DECK} />);
    const deckElement = screen.getByTestId("deck");
    expect(deckElement).toBeInTheDocument();
  });
});
