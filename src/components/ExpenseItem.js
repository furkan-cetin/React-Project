import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  /*const expenseDate = new Date(2001, 2, 25);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 271.5;*/

  /*const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();*/

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <Card className="general">
      <div className="div">
        <ExpenseDate a2={props.a} />
        <h2 class="aa">{props.i}</h2>
        <p id="bb">{title}</p>
        <p id="cc">{props.amount}</p>
        <h1>{props.b}</h1>
      </div>

      <button onClick={clickHandler}>Click me</button>

      {/*<div>
        <p>{month}</p>
        <p>{day}</p>
        <p>{year}</p>
      </div>*/}
    </Card>
  );
};
export default ExpenseItem;
