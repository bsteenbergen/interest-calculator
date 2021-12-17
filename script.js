const principalBox = document.querySelector("#principal")
const intRateBox = document.querySelector("#intRate")
const compPerYearBox = document.querySelector("#compPerYear")
const totalYearsBox = document.querySelector("#totalYears")
const answerBox = document.querySelector("#answer")

function getInterest() {
  const p = Number(principalBox.value)
  const r = Number(intRateBox.value)
  const n = Number(compPerYearBox.value)
  const t = Number(totalYearsBox.value)

  const interest = p * ((1 + (r / n)) ** (n * t))
  answerBox.textContent = "The total compound interest is: $" + interest.toFixed(2)
}

principalBox.addEventListener('input', getInterest)
intRateBox.addEventListener('input', getInterest)
compPerYearBox.addEventListener('input', getInterest)
totalYearsBox.addEventListener('input', getInterest)
