import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  test("renders correct", () => {
    render(<App />);
    const gameStateElement = screen.getByTestId("gameState");
    expect(gameStateElement).toBeInTheDocument();
  });
});
