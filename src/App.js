import ExpenseItem from "./components/ExpenseItem";

function App() {
  const a = "a";
  const b = "b";
  const expense = [
    {
      id: 1,
      date: new Date(2001, 1, 25),
      title: "Car Insurance",
      amount: 271.5,
    },
    {
      id: 2,
      date: new Date(2001, 2, 25),
      title: "B",
      amount: 272.5,
    },
    {
      id: 3,
      date: new Date(2001, 3, 25),
      title: "C",
      amount: 273.5,
    },
  ];
  return (
    <div>
      <h2>Hi REACT</h2>
      <ExpenseItem
        a={a}
        b={b}
        i={expense[0].id}
        title={expense[0].title}
        amount={expense[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        i={expense[1].id}
        title={expense[1].title}
        amount={expense[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        i={expense[2].id}
        title={expense[2].title}
        amount={expense[2].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
