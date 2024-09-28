
const convertButton = document.querySelector(".convert-button")
const coinSelect = document.querySelector(".box-coins")

async function convertValues() {
    const inputCoinValue = document.querySelector(".input-coin").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real

    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas
    
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())

    
    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = 6.5  
    const francoToday = 5.6
    const dolarausToday = 3.4
    const dolarcadToday = 3.7
     

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

    if(coinSelect.value == "franco"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr-FR", {
            style: "currency", currency: "CHF"
        }).format(inputCoinValue / francoToday)
    }

    if(coinSelect.value == "australia"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency", currency: "AUD"
        }).format(inputCoinValue / dolarausToday)
    }      

    if(coinSelect.value == "canada"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency", currency: "CAD"
        }).format(inputCoinValue / dolarcadToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", currency: "BRL"
    }).format(inputCoinValue)

  }
   
  

  function changeCoin(){
    const coinName = document.getElementById("icurrency")
    const coinImage = document.querySelector(".coin-img")

    if(coinSelect.value == "dolar"){
        coinName.innerHTML = "Dólar Americano"
        coinImage.src = "imagens/estados-unidos (1) 1.png"  
    }

    if(coinSelect.value == "euro"){
        coinName.innerHTML = "Euro" 
        coinImage.src = "imagens/euro.png" 
    }

    if(coinSelect.value == "libra"){
        coinName.innerHTML = "Libra"
        coinImage.src = "imagens/united-kingdom-flag-logo.png"  
    }

    if(coinSelect.value == "franco"){
        coinName.innerHTML = "Franco Suiço" 
        coinImage.src = "imagens/switrzeland-logo.png"
  }  

    if(coinSelect.value == "australia"){
        coinName.innerHTML = "Dólar Australiano"
        coinImage.src = "imagens/australia-logo.png"
    }

    if(coinSelect.value == "canada"){
        coinName.innerHTML = "Dólar Canadense"
        coinImage.src = "imagens/canada-logo.png"
    }

    convertValues()

}

coinSelect.addEventListener("change", changeCoin )

convertButton.addEventListener("click", convertValues)






