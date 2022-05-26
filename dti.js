let grossIncome = document.getElementById("gross-income");
let debtTotal = document.getElementById("debts");
const results = document.querySelector('#results');


function dti() {
    let userIncome = grossIncome.textContent;
    let userDebt = debtTotal.textContent;
    let dtiPercent = Math((userDebt / userIncome) * 100);
    return dtiPercent;
}

function calculate() {
    results.innerHTML = dti;
}


