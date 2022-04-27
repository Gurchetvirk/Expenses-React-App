import './ExpenseItem.css';
function ExpenseItem(props)
{
    return (
        <div className="expense-item">
           <div className="expense-item-date">{props.expenseItem.date}</div>
           <div className="expense-item-description">
                <h2>{props.expenseItem.title}</h2>
                <div className="expense-item-amount">${props.expenseItem.amount}</div>
           </div> 
        </div>
    )
}

export default ExpenseItem;