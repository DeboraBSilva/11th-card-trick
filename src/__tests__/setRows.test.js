import SetRows from "../utils/setRows";

describe("when deck is valid", () => {
  const MOCK_VALID_DECK = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  test("returns an array with 3 arrays", () => {
    expect(SetRows(MOCK_VALID_DECK)).toStrictEqual([
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ]);
  });
});

describe("when deck is invalid", () => {
  const MOCK_INVALID_DECK = [];
  test("returns an array with 3 arrays", () => {
    expect(SetRows(MOCK_INVALID_DECK)).toStrictEqual([[], [], []]);
  });
});
