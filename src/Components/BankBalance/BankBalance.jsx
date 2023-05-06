import React from 'react'

function BankBalance() {
  return (
    <div
      className="
        flex 
        flex-row 
        justify-evenly 
        items-center
        bg-green-300 
        rounded-3xl
        max-w-3xl
        h-20
        my-5">
      <div>
        <h1 className='font-bold'>Bank Balance</h1>
        <h1>Amount</h1>
      </div>
    </div>
  );
}

export default BankBalance