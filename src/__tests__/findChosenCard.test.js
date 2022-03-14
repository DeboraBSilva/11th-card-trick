import findChosenCard from "../utils/findChosenCard";

describe("#findChosenCard", () => {
  describe("when rows are valid", () => {
    const MOCK_VALID_ROWS = [
      [0, 1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12, 13],
      [14, 15, 16, 17, 18, 19, 20],
    ];

    describe("when stepTrick is 3", () => {
      const MOCK_STEPTRICK = 3;
      test("returns item with index 10 of array ", () => {
        expect(findChosenCard(MOCK_VALID_ROWS, MOCK_STEPTRICK)).toStrictEqual(
          10
        );
      });
    });

    describe("when stepTrick is not 3", () => {
      const MOCK_STEPTRICK = 1;
      test("returns undefined ", () => {
        expect(findChosenCard(MOCK_VALID_ROWS, MOCK_STEPTRICK)).toStrictEqual(
          undefined
        );
      });
    });
  });
});
