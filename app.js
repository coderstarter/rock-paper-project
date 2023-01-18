const currencyOne = document.getElementById('currency-one');
console.log(currencyOne)
const currencyTwo = document.getElementById('currency-two');
console.log(currencyTwo)
const amountOne = document.getElementById('amount-one');
console.log(amountOne)
const amountTwo = document.getElementById('amount-two');
console.log(amountTwo)
const rate = document.getElementById('rate');
console.log(rate)
const swap = document.getElementById('swap');
console.log(swap)

function calculate() {
    const currOne = currencyOne.value;
    const currTwo = currencyTwo.value;
    console.log(`https://v6.exchangerate-api.com/v6/8b41d3bcaa01228cea68fe5d/latest/${currOne}`)
    fetch(`https://v6.exchangerate-api.com/v6/8b41d3bcaa01228cea68fe5d/latest/${currOne}`)
        .then(res => res.json())
        .then(data => {
            const rateE = data.conversion_rates[currTwo];
            rate.innerHTML = `1 ${currOne} = ${rateE} ${currTwo}`;
            amountTwo.value = (amountOne.value * rateE).toFixed(2);
        })
}

currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
amountTwo.addEventListener('input', calculate);
swap.addEventListener('click', () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
})

calculate();