import Card from "./Card";
function ExpenseDate(props) {
  /*const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();*/

  return (
    /*<div>
      <p>{month}</p>
      <p>{day}</p>
      <p>{year}</p>
    </div>*/
    <Card>
      <h1>{props.a2}</h1>
    </Card>

    /*<div>
      
    </div>*/
  );
}
export default ExpenseDate;
