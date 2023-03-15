function calculateLoan() {
  let loanAmount = document.getElementById("loanAmount").value;
  let interestRate = document.getElementById("interestRate").value;
  let loanTerm = document.getElementById("loanTerm").value;
  interestRate = interestRate / 100;
  let monthlyInterestRate = interestRate / 12;
  let numberOfPayments = loanTerm * 12;
  let monthlyRepayment =
    (loanAmount *
      (monthlyInterestRate * (1 + monthlyInterestRate) ** numberOfPayments)) /
    ((1 + monthlyInterestRate) ** numberOfPayments - 1);
  document.getElementById("monthlyRepayment").innerHTML =
    "Monthly Repayment: $" + monthlyRepayment.toFixed(2);
}
