import { reorderRows, setRows } from "../utils/rows";

describe("#reorderRows", () => {
  describe("when rows are valid", () => {
    const MOCK_VALID_ROWS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];

    describe("and chosen index is 1", () => {
      const MOCK_CHOSEN_INDEX = 1;
      test("returns reordered rows", () => {
        expect(reorderRows(MOCK_VALID_ROWS, MOCK_CHOSEN_INDEX)).toStrictEqual([
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
        ]);
      });
    });
    describe("and chosen index is 2", () => {
      const MOCK_CHOSEN_INDEX = 2;
      test("returns reordered rows", () => {
        expect(reorderRows(MOCK_VALID_ROWS, MOCK_CHOSEN_INDEX)).toStrictEqual([
          [3, 6, 0],
          [4, 7, 1],
          [5, 8, 2],
        ]);
      });
    });
    describe("and chosen index is 3", () => {
      const MOCK_CHOSEN_INDEX = 3;
      test("returns reordered rows", () => {
        expect(reorderRows(MOCK_VALID_ROWS, MOCK_CHOSEN_INDEX)).toStrictEqual([
          [3, 6, 0],
          [4, 7, 1],
          [5, 8, 2],
        ]);
      });
    });
  });
});

describe("#setRows", () => {
  describe("when deck is invalid", () => {
    const MOCK_INVALID_DECK = [[], [], []];
    const MOCK_CHOSEN_INDEX = 1;
    test("returns an array with 3 empty arrays", () => {
      expect(reorderRows(MOCK_INVALID_DECK, MOCK_CHOSEN_INDEX)).toStrictEqual([
        [],
        [],
        [],
      ]);
    });
  });

  describe("when deck is valid", () => {
    const MOCK_VALID_DECK = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    test("returns an array with 3 arrays", () => {
      expect(setRows(MOCK_VALID_DECK)).toStrictEqual([
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ]);
    });
  });

  describe("when deck is invalid", () => {
    const MOCK_INVALID_DECK = [];
    test("returns an array with 3 arrays", () => {
      expect(setRows(MOCK_INVALID_DECK)).toStrictEqual([[], [], []]);
    });
  });
});
