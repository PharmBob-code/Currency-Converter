const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD` 
const fromCurr = document.getElementById(`from-select`)
const toCurr = document.getElementById(`to-select`)
const btn = document.getElementById(`btn`)

countryCurr.forEach(currency => {
    const option = document.createElement(`option`)
    option.value = currency.currency_code
    option.text = currency.currency_code
    fromCurr.append(option);
});

countryCurr.forEach(currency => {
    const option = document.createElement(`option`)
    option.value = currency.currency_code
    option.text = currency.currency_code
    toCurr.append(option);
});


//Default Value of the selects
fromCurr.value = `USD`
toCurr.value =`EUR`

btn.addEventListener(`click`, currencyConverter)
function currencyConverter(){
    const amountInput =document.getElementById(`amount`).value
    if (amountInput.length !==0) {
       fetch(url).then(resp => resp.json()).then(data => console.log(data)).catch(data => console.log(data.message))
       
    }else{
        alert(`please enter a value`)
    }
}
