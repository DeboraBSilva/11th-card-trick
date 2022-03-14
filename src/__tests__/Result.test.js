import { render, screen } from "@testing-library/react";
import Result from "../components/Result";

describe("Result Component", () => {
  test("renders one card", () => {
    const MOCK_CARD = { suit: "Hearts", cardValue: "Ace" };
    render(<Result chosenCard={MOCK_CARD} />);
    const cardElement = screen.getByTestId("result");
    expect(cardElement).toBeInTheDocument();
  });
});
