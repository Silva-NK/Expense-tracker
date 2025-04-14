// import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseForm from "./components/ExpenseForm"

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
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
            <ExpenseForm onAddExpense={addExpense} />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;









/* import React, { useState } from "react";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", category: "", amount: "", date: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.amount || !form.date) return;
    setExpenses([...expenses, form]);
    setForm({ name: "", description: "", category: "", amount: "", date: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Expense Tracker</h1>

      {/* Expense Form 
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mb-6">
        <input name="name" placeholder="Expense Name" value={form.name} onChange={handleChange} className="border p-2 m-2 w-full" required />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-2 m-2 w-full" />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} className="border p-2 m-2 w-full" />
        <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleChange} className="border p-2 m-2 w-full" required />
        <input name="date" type="date" value={form.date} onChange={handleChange} className="border p-2 m-2 w-full" required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded m-2">Add Expense</button>
      </form>

      {/* Expense List 
      <table className="w-full bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3">Expense</th>
            <th className="p-3">Description</th>
            <th className="p-3">Category</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index} className="border-t">
              <td className="p-3">{expense.name}</td>
              <td className="p-3">{expense.description}</td>
              <td className="p-3">{expense.category}</td>
              <td className="p-3">${expense.amount}</td>
              <td className="p-3">{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTracker; */
