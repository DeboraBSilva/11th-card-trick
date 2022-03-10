import Card from "./card";

function Result({ chosenCard }) {
  console.log(chosenCard);
  return (
    <div>
      <h1>Is this your card? ;)</h1>
      <Card card={chosenCard} />
    </div>
  );
}

export default Result;
