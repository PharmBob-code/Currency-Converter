let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD` 
let fromDropDown = document.getElementById(`from-currency`)
let toDropDown = document.getElementById(`to-currency`)
const amount = document.getElementById(`amount`)

//creating the dropdowns
countryCurr.forEach(currency => {
    const option = document.createElement(`option`)
    option.value = currency.currency_code
    option.text = currency.currency_code
    fromDropDown.append(option)
});

countryCurr.forEach(currency => {
    const option = document.createElement(`option`)
    option.value = currency.currency_code
    option.text = currency.currency_code
    toDropDown.append(option)
});

//setting default values
fromDropDown.value = `USD`
toDropDown.value = `NGN`

//

let currencyConverter = () =>{

    const fromCurrency = fromDropDown.value
    const toCurrency = toDropDown.value
    const amountInput = amount.value

    if (amountInput.length !==0) {
        fetch(url).then(function(resp){
            return resp.json()
        })
        .then(function(data) {
            let fromExchangeRate = data.conversion_rates[fromCurrency]
            let toExchangeRate = data.conversion_rates[toCurrency]
            let convertedAmount = (amountInput/fromExchangeRate) * toExchangeRate
            result.innerHTML =  `${amountInput} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`

        }).catch(data => {
            console.log(data);
            result.style.color =`red`
            result.style.fontSize = `0.75rem`
            result.innerHTML = `${data.message}, please check your internet connection`
        })
    }else{
        alert(`Please input a value`)
    }
}

let convertBtn = document.getElementById(`convert-button`)
let result = document.getElementById(`result`)
convertBtn.addEventListener(`click`, currencyConverter)


