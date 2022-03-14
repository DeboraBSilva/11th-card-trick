import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App Component", () => {
  describe("before button clicks", () => {
    test("renders correct", () => {
      render(<App />);
      const gameStateElement = screen.getByTestId("gameState");
      expect(gameStateElement).toBeInTheDocument();
    });

    test("renders CardRows component", () => {
      render(<App />);
      const gameStateElement = screen.getByTestId("cardRows");
      expect(gameStateElement).toBeInTheDocument();
    });
  });

  describe("when click button 3 times", () => {
    test("renders Result component", () => {
      render(<App />);
      const buttonFirstRow = screen.getByTestId(1);
      const buttonSecondRow = screen.getByTestId(2);
      const buttonThirdRow = screen.getByTestId(1);

      userEvent.click(buttonFirstRow);
      userEvent.click(buttonSecondRow);
      userEvent.click(buttonThirdRow);

      const gameStateElement = screen.getByTestId("result");
      expect(gameStateElement).toBeInTheDocument();
    });
  });
});
