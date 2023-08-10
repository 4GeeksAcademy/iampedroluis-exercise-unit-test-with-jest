const sum = (a,b)=>{
    return a +b
}

///console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(usd){
    // Pasar de dolar a euro
    let euros = usd / oneEuroIs.USD
    let yen = oneEuroIs.JPY
    let total = yen * euros

    return total
}


function fromEuroToDollar(euro){
    let dollar = oneEuroIs.USD
    let total = euro * dollar
    return total
}


function fromYenToPound(yen){
    let euros = yen / oneEuroIs.JPY
    let pound = oneEuroIs.GBP
    let total= pound * euros
    return total
    
}


module.exports = {sum , fromEuroToDollar, fromDollarToYen, fromYenToPound}