// import ExpenseItem from "./components/ExpenseItem";


// function App() {
//   return (
//     <div>
//       <h2>Let's get started!</h2>
//       <ExpenseItem></ExpenseItem>
//     </div>
//   );
// }

// export default App;


// import ExpenseItem from "./components/ExpenseItem";


// function App() {
//   const expenses = [
//     {
//       id: 'e1',
//       title: 'Toilet Paper',
//       amount: 94.12,
//       date: new Date(2020, 7, 14),
//       location : "INDIA", 
//     },
//     { id: 'e2',
//       title: 'New TV',
//       amount: 799.49, 
//       date: new Date(2021, 2, 12),
//       location : "INDIA",
//     },
//     {
//       id: 'e3',
//       title: 'Car Insurance',
//       amount: 294.67,
//       date: new Date(2021, 2, 28),
//       location : "INDIA",
//     },
//     {
//       id: 'e4',
//       title: 'New Desk (Wooden)',
//       amount: 450,
//       date: new Date(2021, 5, 12),
//       location : "INDIA",
//     },
//     // {
//     //   id: 'e1',
//     //   title: 'Toilet Paper',
//     //   amount: 94.12,
//     //   date: new Date(2020, 7, 14),
//     //   location : "INDIA", 
//     // },
//     // { id: 'e2',
//     //   title: 'New TV',
//     //   amount: 799.49, 
//     //   date: new Date(2021, 2, 12),
//     //   location : "INDIA",
//     // },
//     // {
//     //   id: 'e3',
//     //   title: 'Car Insurance',
//     //   amount: 294.67,
//     //   date: new Date(2021, 2, 28),
//     //   location : "INDIA",
//     // },
//     // {
//     //   id: 'e4',
//     //   title: 'New Desk (Wooden)',
//     //   amount: 450,
//     //   date: new Date(2021, 5, 12),
//     //   location : "INDIA",
//     // },
//   ];
//   // we can use map function to loop through each elements.
//   const expenseComponents = expenses.map((expense) => (
//     <ExpenseItem
//       key={expense.id}
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//       location={expense.location}
//     />
//   ));

//   return (
//     <div>
//       <h2>Let's get started!</h2>
//       {expenseComponents}
//     </div>
//   );
// }

// export default App;




// final layout 
// import React from 'react';

// import Expenses from './components/Expenses/Expenses';

// const App = () => {
//   const expenses = [
//     {
//       id: 'e1',
//       title: 'Toilet Paper',
//       amount: 94.12,
//       date: new Date(2020, 7, 14),
//     },
//     { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
//     {
//       id: 'e3',
//       title: 'Car Insurance',
//       amount: 294.67,
//       date: new Date(2021, 2, 28),
//     },
//     {
//       id: 'e4',
//       title: 'New Desk (Wooden)',
//       amount: 450,
//       date: new Date(2021, 5, 12),
//     },
//   ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );




import React, { useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const addExpenseHandler = expense => {
  console.log("in App.js");
  console.log(expense);
};
  
const App = () => {
  const[expenses, setExpenses] =useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = expense =>{
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;