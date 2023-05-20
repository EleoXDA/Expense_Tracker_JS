let income = 0;
let expenses = [];

document.getElementById('add-expense').addEventListener('click', function() {
    const expenseCategory = document.getElementById('expense-category').value;
    const expenseAmount = Number(document.getElementById('expense-amount').value);
    expenses.push({category: expenseCategory, amount: expenseAmount});
    updateSummary();
});

function updateSummary() {
    let totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    let balance = income - totalExpenses;
    document.getElementById('summary-section').innerText = `Total Expenses: $${totalExpenses} \nBalance: $${balance}`;
}
