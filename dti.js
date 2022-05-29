

let grossIncome; 
let debtTotal;
let result;


function computeDTI(event, inputText) {
    // event.preventDefault();
    grossIncome = document.getElementById('gross-income').value;
    debtTotal = document.getElementById('debts').value;
    // result = document.querySelector('#results');

    percentDTI = ((debtTotal / grossIncome) * (100));
    alert('your dti is ' + percentDTI + '%');
    document.getElementById('results').innerHTML = percentDTI; 
    
    // return false;
}

