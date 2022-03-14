function reorderRows(rows, chosenIndex) {
  if (chosenIndex === 0) {
    return setRows([...rows[1], ...rows[0], ...rows[2]]);
  } else if (chosenIndex === 1) {
    return setRows([...rows[0], ...rows[1], ...rows[2]]);
  } else {
    return setRows([...rows[1], ...rows[2], ...rows[0]]);
  }
}

function setRows(deck) {
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

export { reorderRows, setRows };
