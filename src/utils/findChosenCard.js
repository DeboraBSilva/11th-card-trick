function findChosenCard(rowsList, stepTrick) {
  if (stepTrick === 3) {
    return rowsList.flatMap((row) => row).find((card, index) => index === 10);
  }
}

export default findChosenCard;
