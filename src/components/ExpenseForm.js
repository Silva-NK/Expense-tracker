import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './ExpenseForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ExpenseForm ({ onAddExpense }) {
    const [expense, setExpense] = useState({
        name: "",
        description: "",
        category: "",
        amount: "",
        date: "",
    });

    const handleChange = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!expense.name || !expense.description || !expense.category || !expense.amount || !expense.date) return;

        const newExpense = {
            id: uuidv4(),
            ...expense,
        };

        onAddExpense(newExpense);
        setExpense({ name: "", description: "", category: "", amount: "", date: ""});
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="form-header">Add Expense</h2>
            <p className="form-subtitle">Enter your expense details below.</p>

            <input
               type="text"
               name="name"
               className="form-input" 
               placeholder="Enter Expense Name"
               value={expense.name}
               onChange={handleChange}
               required
            />

            <input
               type="text"
               name="description"
               className="form-input" 
               placeholder="Enter Expense Description"
               value={expense.description}
               onChange={handleChange}
               required
            />

            <select name="category" className="form-input"  value={expense.category} onChange={handleChange} required>
                <option value="">Select Expense Category</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Shopping">Shopping</option>
                <option value="Recreation">Recreation</option>
                <option value="Savings">Savings</option>
                <option value="Bills">Bills</option>
                <option value="Services">Services</option>
            </select>

            <input
               type="number"
               name="amount"
               className="form-input" 
               placeholder="Enter Expense Amount"
               value={expense.amount}
               onChange={handleChange}
               required
            />

            <input
               type="date"
               name="date"
               className="form-input" 
               placeholder="Enter Date of Expense"
               value={expense.date}
               onChange={handleChange}
               required
            />

            <button type="submit" className="submit-btn">Submit Expense</button>
        </form>
    );
}

export default ExpenseForm;