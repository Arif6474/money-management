
document.getElementById('culculation').addEventListener('click',function(){
    // user food expense
    const foodExpense = document.getElementById('food-expense');
    const foodExpenseText = foodExpense.value;
    const foodExpenseAmount = parseFloat(foodExpenseText);
    // user rent expense 
    const rentExpense = document.getElementById('rent-expense');
    const rentExpenseText = rentExpense.value;
    const rentExpenseAmount = parseFloat(rentExpenseText);

    // user cloth expense 
    const clothExpense = document.getElementById('cloth-expense');
    const clothExpenseText = clothExpense.value;
    const clothExpenseAmount = parseFloat(clothExpenseText);
    
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesText = totalExpenses.value;
    const totalExpensesAmount = parseFloat(totalExpensesText);

   // user total cost 
   const totalCost = foodExpenseAmount + rentExpenseAmount + clothExpenseAmount;

   // 1.error handlig

   if ((rentExpenseAmount > 0) && (rentExpenseAmount > 0) && (clothExpenseAmount > 0) && (totalCost > 0 ) ){
      totalExpenses.innerText = totalCost;
      
   }
   // user income
   const incomeMonthly = document.getElementById('income');
   const incomeAmount = parseFloat(incomeMonthly.value);
   const balanceRemain = document.getElementById('balance');
   const balanceRemainAmount = parseFloat(balanceRemain);
   const balanceAmount = incomeAmount - totalCost; 
   // 2.error handlig
//   if (incomeAmount > 0) {
//    balanceRemain.innerText = balanceAmount;
//   }
// clear the input field
foodExpense.value = '';
rentExpense.value = ''; 
clothExpense.value = '';


   document.getElementById('save-button').addEventListener('click', function(){
      const incomeMonthly = document.getElementById('income');
      const incomeAmount = parseFloat(incomeMonthly.value);
      const saveRate = document.getElementById('save-rate');
      const saveRateNumber = parseFloat(saveRate.value);
      const saveRateAmount = saveRateNumber / 100;
      
      const saveTotal = document.getElementById('save-amount');
      const saveTotalAmount = parseFloat(saveTotal.value);
      const saveAmount = incomeAmount * saveRateAmount;
      
      saveTotal.innerText = saveAmount;
      const remainingBalance = document.getElementById('remaining-balance');
      const remainingBalanceAmount = parseFloat(remainingBalance);
      const remainAmount = balanceAmount - saveAmount ;
      remainingBalance.innerText = remainAmount;
      
   
   })

});
