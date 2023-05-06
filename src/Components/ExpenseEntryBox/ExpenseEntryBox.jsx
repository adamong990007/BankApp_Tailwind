import React from "react";
import { useState } from "react";

function ExpenseEntryBox(props) {
  const [entereddate, setEnteredDate] = useState("");
  const [entereditemDescription, setEnteredItemDescription] = useState("");
  const [enteredamount, setEnteredAmount] = useState(""); //useState must be used diretly in component function

  const itemDescriptionChangeHandler = (event) => {
    setEnteredItemDescription(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      itemDescription: entereditemDescription,
      date: new Date(entereddate),
      amount: enteredamount,
    };
    props.onNewExpense(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredItemDescription("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-row justify-evenly items-center bg-blue-300 rounded-3xl max-w-3xl h-20 my-5">
      <div>
        <label className="px-3">Date</label>
        <input
          value={entereddate}
          onChange={dateChangeHandler}
          className="text-center rounded-md"
          type="date"
        />
      </div>
      <div>
        <label className="px-3">Item Description</label>
        <input
          onChange={itemDescriptionChangeHandler}
          className="text-center rounded-md"
          type="text"
          value={entereditemDescription}
        />
      </div>
      <div>
        <label className="px-3">Amount</label>
        <input
          onChange={amountChangeHandler}
          className="text-center rounded-md"
          type="number"
          value={enteredamount}
        />
      </div>
      <button type="submit" className="bg-gray-200 rounded-lg mx-4">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseEntryBox;
