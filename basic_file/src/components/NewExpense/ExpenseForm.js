import React from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
    const titleChangeHandler = () => {
        console.log("You simply have to use vanilla JS. - onChange and event object");
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
                    <input type="number" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="date" onChange={titleChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;