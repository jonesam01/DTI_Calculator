

let grossIncome; 
let debtTotal;
let result;
let percentDTI;


function computeDTI() {
    grossIncome = document.getElementById('gross-income').value;
    debtTotal = document.getElementById('debts').value;

    percentDTI = Math.floor((debtTotal / grossIncome) * (100));
    
    document.getElementById('results').innerHTML = percentDTI;
}

