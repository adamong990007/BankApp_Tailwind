import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseLineItem from './Components/ExpenseLineItem/ExpenseLineItem'
import ExpenseEntryBox from './Components/ExpenseEntryBox/ExpenseEntryBox'
import BankBalance from './Components/BankBalance/BankBalance'
function App() {
  // const [count, setCount] = useState(0)
  const expense = [{
    date: new Date(2023, 2, 23).toISOString(),
    itemDescription: "CarInsurggance",
    amount: 1211
  },{
    date: new Date(2023, 3, 23),
    itemDescription: "CarInsurance",
    amount: 1211
  },{
    date: new Date(2023, 4, 23),
    itemDescription: "CarInsurance",
    amount: 1211
  }];

  const newExpensefromChild = expensedata =>{
    const expenseData={
      ...expensedata,
      id: Math.random().toString()
    }
    console.log(expenseData);

  }


  return (
    <div>
      <BankBalance />
      <ExpenseEntryBox onNewExpense={newExpensefromChild} />
      <ExpenseLineItem
        itemDescription={expense[0].itemDescription}
        amount={expense[0].amount}
        date={expense[0].date}
      />
    </div>
  );
}

export default App
