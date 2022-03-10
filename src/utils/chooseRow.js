import SetRows from "./setRows";

function ChooseRow(rows, chosenIndex) {
  if (chosenIndex === 0) {
    return SetRows([...rows[1], ...rows[0], ...rows[2]]);
  } else if (chosenIndex === 1) {
    return SetRows([...rows[0], ...rows[1], ...rows[2]]);
  } else {
    return SetRows([...rows[1], ...rows[2], ...rows[0]]);
  }
}

export default ChooseRow;
