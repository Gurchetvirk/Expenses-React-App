import './ExpenseFilter.css';
function ExpenseFilter(props){
    const dateChangeHandler = (event) =>
    {
        props.onDateChange(event.target.value);
    }
    return (
        <div className="expense-filter-container">
            <label>Filter By Year</label>
            <select defaultValue="Select" onChange={dateChangeHandler}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    );
}

export default ExpenseFilter;