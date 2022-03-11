import { render, screen } from "@testing-library/react";
import CardRows from "../components/CardRows";

describe("CardRows Component", () => {
  test("renders 3", () => {
    const MOCK_ROWS = [
      [
        { suit: "Hearts", cardValue: "Ace" },
        { suit: "Clubs", cardValue: "King" },
        { suit: "Spades", cardValue: "Five" },
      ],
      [
        { suit: "Hearts", cardValue: "Ace" },
        { suit: "Clubs", cardValue: "King" },
        { suit: "Spades", cardValue: "Five" },
      ],
      [
        { suit: "Hearts", cardValue: "Ace" },
        { suit: "Clubs", cardValue: "King" },
        { suit: "Spades", cardValue: "Five" },
      ],
    ];
    render(<CardRows deck={MOCK_ROWS} />);
    const cardRowsElement = screen.getByTestId("cardRows");
    expect(cardRowsElement).toBeInTheDocument();
  });
});
