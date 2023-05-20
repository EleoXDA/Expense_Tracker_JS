let income = 0;
let expenses = [];

document.getElementById('add-income').addEventListener('click', function() {
    income = Number(document.getElementById('income').value);
    updateIncomeInSummary();
});

document.getElementById('add-expense').addEventListener('click', function() {
    const expenseCategory = document.getElementById('expense-category').value;
    const expenseAmount = Number(document.getElementById('expense-amount').value);
    expenses.push({category: expenseCategory, amount: expenseAmount});
    updateExpensesInSummary();
});

function updateIncomeInSummary() {
    const table = document.getElementById('summary-table');
    const row = table.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = "Income";
    cell2.innerHTML = "$" + income;
}

function updateExpensesInSummary() {
    const table = document.getElementById('summary-table');
    const row = table.insertRow(-1); // Inserts a row at the end of the table
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = expenses[expenses.length - 1].category;
    cell2.innerHTML = "$" + expenses[expenses.length - 1].amount;
}
