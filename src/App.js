// import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable"

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="App">

      <header className="App-header">
        <h1> Expense Tracker </h1>
        <p> Start taking control of your finances and life. 
          Record, categorise and analyse your spending. </p>
      </header>

      <div className="container-fluid px-0">
        <div className="row gx-3 mx-0">
          <div className="col-md-3 ps-0">
            <div className="form-border">
              <ExpenseForm onAddExpense={addExpense} />
            </div>
          </div>

          <div className="col-md-9">
            <ExpenseTable expenses={expenses} onDelete={deleteExpense}/>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;