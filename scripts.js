
const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCoinValue = document.querySelector(".input-coin").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real

    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    const dolarToday = 5.1
    const euroToday = 5.5
    const libraToday = 6.5

    const convertedValue = inputCoinValue / dolarToday 

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", currency: "BRL"
    }).format(inputCoinValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency", currency: "USD"
    }).format(convertedValue)

    console.log(convertedValue)
}
   

convertButton.addEventListener("click", convertValues)






