import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

describe("Card Component", () => {
  test("renders one card", () => {
    const MOCK_CARD = { suit: "Hearts", cardValue: "Ace" };
    render(<Card card={MOCK_CARD} />);
    const cardElement = screen.getByRole("card");
    expect(cardElement).toBeInTheDocument();
  });
});
