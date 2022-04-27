import react,{useState} from "react";
import './NewExpense.css';
function NewExpense(props){
    const [addExpense,setAddExpense] = useState(false);
    const [enteredTitle,setTitle] = useState('');
    const [enteredAmount,setAmount] = useState('');
    const [enteredDate,setDate] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const newExpenseObject = {
            title:enteredTitle,
            amount:enteredAmount,
            date:enteredDate
        };

        props.onAddNewExpense(newExpenseObject);
        setTitle('');
        setAmount('');
        setDate('');
    };

    const onTitleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    
    const onAmountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    
    const onDateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    return(
        <div className="newexpense-container">
            { addExpense === true ?
                <form onSubmit={onSubmitHandler}>
                    <div className="text-container">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={onTitleChangeHandler}></input>
                    </div>
                    <div className="amount-container">
                        <label>Amount</label>
                        <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={onAmountChangeHandler}></input>
                    </div>
                    <div className="date-container">
                        <label>Date</label>
                        <input type="date" min="2019-01-01" value={enteredDate} onChange={onDateChangeHandler}></input>
                    </div>
                    <div className="buttons-container">
                        <button onClick={() => { setAddExpense(false) }}>Cancel</button>
                        <button type="submit">Add Expense</button>
                    </div>
                </form> :
                    <button className="isolate-btn" onClick={() => { setAddExpense(true) }}>Add Expense</button>
                }
        </div>
    );
}
export default NewExpense;