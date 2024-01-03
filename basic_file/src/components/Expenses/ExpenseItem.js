// import React from 'react';

// we have to use useState from here for assignment--2 this line is declared below that's why here it is commented.
// import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


// advance react- assignment-1
// const ExpenseItem = (props) => {
//   // function clickHandler(){}
//   const clickHandler = () => {
//     const expenseItem = document.querySelector(".expense-item");
//     if(expenseItem){
//       expenseItem.remove();
//     }
//   };
//   return (
//     <Card className='expense-item'>
//       <ExpenseDate date={props.date} />
//       <div className='expense-item__description'>
//         <h2>{props.title}</h2>
//         <div className='expense-item__price'>${props.amount}</div>
//       </div>
//       <button onClick={clickHandler}>Delete Expense</button>
//     </Card>
//   );
// }

// export default ExpenseItem;


// advance react - assignment-2
// const ExpenseItem = (props) => {
//   // function clickHandler(){}
//   let title = props.title;
//   const clickHandler = () => {
//     title = "Updated";
//   };

//   return (
//     <Card className='expense-item'>
//       <ExpenseDate date={props.date} />
//       <div className='expense-item__description'>
//         {/* <h2>{props.title}</h2> */}
//         <h2>{title}</h2>
//         <div className='expense-item__price'>${props.amount}</div>
//       </div>
//       <button onClick={clickHandler}>Change Title</button>
//     </Card>
//   );
// }

// export default ExpenseItem;



// import React, { useState } from 'react';

// const ExpenseItem = (props) => {
//   const [title, setTitle] = useState(props.title);

//   const clickHandler = () => {
//     setTitle('Updated');
//   };

//   return (
//     <Card className='expense-item'>
//       <ExpenseDate date={props.date} />
//       <div className='expense-item__description'>
//         <h2>{title}</h2>
//         <div className='expense-item__price'>${props.amount}</div>
//       </div>
//       <button onClick={clickHandler}>Change Title</button>
//     </Card>
//   );
// }

// export default ExpenseItem;



// assignment- 2 last question :-
import React, { useState } from 'react';

const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setAmount(100);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Amount</button>
    </Card>
  );
}

export default ExpenseItem;
