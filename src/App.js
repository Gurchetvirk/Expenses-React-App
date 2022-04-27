import React,{useState} from 'react';
import ExpenseItem from './Components/ExpenseItem';
import './App.css';
import NewExpense from './Components/NewExpense/NewExpense';
import ExpenseFilter from './Components/ExpenseFilter';
import Chart from './Components/Chart';
function App() {
  const [date,setDate] = useState('2019');
  const dummyItems =[
    {id:"1",title:"Car Insurance",amount:"25.45",date:'2019-05-15'},
    {id:"2",title:"Shopping",amount:"45.3",date:'2020-07-23'},
    {id:"3",title:"Movies",amount:"12",date:'2021-03-30'}];

  const [items, setItems] = useState(dummyItems);
  const onAddNewExpense = (newExpense) => {
    const expenseObject = {
      id:Math.random().toString(),
      ...newExpense
    }
    setItems(prevExpense => {
        return ([expenseObject,...prevExpense]);
      });
  };

  let filteredExpense = items.filter( (item) => {
    return item.date.slice(0,4) === date;
  });
  const onDateChangeHandler = (value) => {
    setDate(value);
  };

  return (
    <div className='body-container'>
    <NewExpense onAddNewExpense={onAddNewExpense} />
    <div className='expense-container'>
    { filteredExpense.length ===0 ? null : <Chart items={filteredExpense}/>}
    <ExpenseFilter onDateChange={onDateChangeHandler}/>
    {filteredExpense.length === 0 ? <p className='error'>No Expense to Show</p> : filteredExpense.map((item) => {
      return <ExpenseItem key={item.id} expenseItem={item} />
    })}
    </div>
    </div>
  );
}

export default App;
