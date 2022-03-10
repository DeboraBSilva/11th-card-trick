function SetRows(deck) {
  const NUMBER_OF_ROWS = 3;
  return deck.reduce(
    (acc, element, index) => {
      if (index % NUMBER_OF_ROWS === 0) {
        return [[...acc[0], element], acc[1], acc[2]];
      } else if (index % NUMBER_OF_ROWS === 1) {
        return [acc[0], [...acc[1], element], acc[2]];
      } else if (index % NUMBER_OF_ROWS === 2) {
        return [acc[0], acc[1], [...acc[2], element]];
      }
    },
    [[], [], []]
  );
}

export default SetRows;
