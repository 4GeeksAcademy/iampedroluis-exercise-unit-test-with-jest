const sum = (a,b)=>{
    return a +b
}

///console.log(sum(7,3))



let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(){
    let dollar = oneEuroIs.USD
    let yen = oneEuroIs.JPY
    let total = yen * dollar

    return total
}
console.log(fromDollarToYen())

function fromEuroToDollar(euro){
    let dollar = oneEuroIs.USD
    let total = (euro * dollar)
    return total
}
console.log(" fromEuroToDollar "+fromEuroToDollar(1))

function fromYenToPound(){
    let yen = oneEuroIs.JPY
    let pound = oneEuroIs.GBP
    let total= pound * yen
    return total
    
}
console.log(fromYenToPound(1))

module.exports = {sum , fromEuroToDollar}