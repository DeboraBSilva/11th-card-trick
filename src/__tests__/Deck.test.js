import { render, screen } from "@testing-library/react";
import Deck from "../components/Deck";

describe("Deck Component", () => {
  describe("when array is valid", () => {
    test("renders a deck element", () => {
      const MOCK_DECK = [
        { suit: "Hearts", cardValue: "Ace" },
        { suit: "Clubs", cardValue: "King" },
        { suit: "Spades", cardValue: "Five" },
      ];
      render(<Deck deckList={MOCK_DECK} />);
      const deckElement = screen.getByTestId("deck");
      expect(deckElement).toBeInTheDocument();
    });

    test("renders all cards received through an array", () => {
      const MOCK_DECK = [
        { suit: "Hearts", cardValue: "Ace" },
        { suit: "Clubs", cardValue: "King" },
        { suit: "Spades", cardValue: "Five" },
      ];
      render(<Deck deckList={MOCK_DECK} />);
      const cardElement = screen.getAllByRole("card");
      expect(cardElement.length).toBe(3);
    });
  });

  describe("when array is empty", () => {
    test("renders deck element but no card element", () => {
      const MOCK_DECK = [];
      render(<Deck deckList={MOCK_DECK} />);
      const deckElement = screen.queryByRole("card");
      expect(deckElement).not.toBeInTheDocument();
    });
  });
});
