
document.getElementById('culculation').addEventListener('click',function(){
    // user food expense
    const foodExpense = document.getElementById('food-expense');
    const foodExpenseText = foodExpense.value;
    const foodExpenseAmount = parseInt(foodExpenseText);
    // user rent expense 
    const rentExpense = document.getElementById('rent-expense');
    const rentExpenseText = rentExpense.value;
    const rentExpenseAmount = parseInt(rentExpenseText);
    // user cloth expense 
    const clothExpense = document.getElementById('cloth-expense');
    const clothExpenseText = clothExpense.value;
    const clothExpenseAmount = parseInt(clothExpenseText);
    
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesText = totalExpenses.value;
    const totalExpensesAmount = parseInt(totalExpensesText);

   // user total cost 
   const totalCost = foodExpenseAmount + rentExpenseAmount + clothExpenseAmount;

   totalExpenses.innerText = totalCost;

   // user income
   const incomeMonthly = document.getElementById('income');
   const incomeAmount = parseInt(incomeMonthly.value);
   const balanceRemain = document.getElementById('balance');
   const balanceRemainAmount = parseInt(balanceRemain);
   const balanceAmount = incomeAmount - totalCost;

   balanceRemain.innerText = balanceAmount;
   document.getElementById('save-button').addEventListener('click', function(){
      const incomeMonthly = document.getElementById('income');
      const incomeAmount = parseInt(incomeMonthly.value);
      const saveRate = document.getElementById('save-rate');
      const saveRateNumber = parseInt(saveRate.value);
      const saveRateAmount = saveRateNumber / 100;
      
      const saveTotal = document.getElementById('save-amount');
      const saveTotalAmount = parseInt(saveTotal.value);
      const saveAmount = incomeAmount * saveRateAmount;
      
      saveTotal.innerText = saveAmount;
      const remainingBalance = document.getElementById('remaining-balance');
      const remainingBalanceAmount = parseInt(remainingBalance);
      const remainAmount = balanceAmount - saveAmount ;
      remainingBalance.innerText = remainAmount;
   
   })

});
