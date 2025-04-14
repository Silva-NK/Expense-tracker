import { useState } from "react";
import './ExpenseTable.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';

function ExpenseTable ({expenses, onDelete}) {
    
    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this expense?");
        if (confirmDelete) {
            onDelete(id);
        }
    };

    return (
        <div className="expense-table">
            
            <div className="controls-row">
                <div className="search-box">
                    <i className='bx bx-search'></i>
                    <input
                        type="text"
                        placeholder="Search by name or description..."
                    />
                </div>

                <div className="sort-control">
                    <span>Sort by:</span>
                    <div className="sort-dropdown">
                        <select>
                            <option>Category</option>
                            <option>Description</option>
                        </select>
                        <i className='bx bx-chevron-down'></i>
                    </div>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Expense</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.name}</td>
                            <td>{expense.description}</td>
                            <td>{expense.category}</td>
                            <td>Ksh. {parseFloat(expense.amount).toFixed(2)}</td>
                            <td>{expense.date}</td>
                            <td>
                                <button onClick={() => handleDelete(expense.id)} className="delete-btn" ><i className='bx bx-trash' title="Delete Expense"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ExpenseTable;