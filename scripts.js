
const convertButton = document.querySelector(".convert-button")
const coinSelect = document.querySelector(".box-coins")

function convertValues(){
    const inputCoinValue = document.querySelector(".input-coin").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real

    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    console.log(coinSelect.value)
    const dolarToday = 5.1
    const euroToday = 5.5
    const libraToday = 6.5

     

    if(coinSelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCoinValue / dolarToday)
    }

    if(coinSelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCoinValue  / euroToday)
    }

    if (coinSelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency", currency: "GBP"
        }).format(inputCoinValue  / libraToday)
    }





    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", currency: "BRL"
    }).format(inputCoinValue)

    

    
}
   

convertButton.addEventListener("click", convertValues)






