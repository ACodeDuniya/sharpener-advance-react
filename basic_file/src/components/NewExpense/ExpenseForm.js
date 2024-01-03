// import React from "react";
// import "./ExpenseForm.css";
// const ExpenseForm = () => {
//     const titleChangeHandler = () => {
//         console.log("You simply have to use vanilla JS. - onChange and event object");
//     };
//     return (
//         <form>
//             <div className="new-expense__controls">
//                 <div className="new-expense__control">
//                     <label>Title</label>
//                     <input type="text" onChange={titleChangeHandler} />
//                 </div>
//                 <div className="new-expense__control">
//                     <label>Amount</label>
//                     <input type="number" onChange={titleChangeHandler}/>
//                 </div>
//                 <div className="new-expense__control">
//                     <label>Title</label>
//                     <input type="date" onChange={titleChangeHandler}/>
//                 </div>
//             </div>
//             <div className="new-expense__actions">
//                 <button type="submit">Add Expense</button>
//             </div>
//         </form>
//     );
// };

// export default ExpenseForm;


// adding-multiple states
import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
    const [enteredTitle , setEnteredTitle]=useState("");
    const[enteredAmount , setEnteredAmount]=useState("");
    const[enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        const titleChange = event.target.value;
        setEnteredTitle(titleChange);
        // console.log(titleChange);  -- to see the entered value in the console.
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

    };
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="date" onClick={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;