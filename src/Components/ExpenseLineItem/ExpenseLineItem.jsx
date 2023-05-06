import React from 'react'



function ExpenseLineItem(props) {

  return (
    <div
      className="
    flex 
    flex-row 
    justify-evenly
    items-center
     bg-red-200 
     rounded-3xl
     max-w-3xl
     h-10
    ">
      <div className="flex flex-row justify-evenly">
        <h1 className="mx-5">{props.date}</h1>
        <h1 className="mx-5">{props.itemDescription}</h1>
        <h1 className="mx-5">{props.amount}</h1>
      </div>
      <div>
        <button className="mx-1">🗑️</button>
        <button className="mx-1">✏️</button>
      </div>
    </div>
  );
}

export default ExpenseLineItem