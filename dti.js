let grossIncome = document.getElementById("gross-income").value;
let debtTotal = document.getElementById("debts").value;
let result = document.querySelector('#results');


let percentDTI = ((debtTotal / grossIncome) * (100));
console.log(percentDTI);

// result.innerHTML = percentDTI;



function computeDTI() {
    result.innerHTML = percentDTI;
}


// function computeDTI() {
//     let grossIncome = document.getElementById('gross-income').value;
//     let debtTotal = document.getElementById("debts").value;
//     let results = document.querySelector('#results');
//     let percentDTI = Math((userDebt / userIncome) * 100);
//     results.innerHTML = percentDTI;
// }
