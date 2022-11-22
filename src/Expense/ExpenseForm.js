import { Fragment } from "react";

const ExpenseFirstUI = () => {
    return (
        <Fragment>
            <h1>Day to Day Expense</h1>
            <form>
                <label>Enter Amount</label>
                <input type="text" />
                <label>Enter Description</label>
                <input type="text" />
                <label>Choose Catogery</label>
                <select>
                    <option>Car</option>
                    <option>Bike</option>
                </select>
            </form>

            <h2>Your Added Expense</h2>
        </Fragment>
    )
}

export default ExpenseFirstUI;