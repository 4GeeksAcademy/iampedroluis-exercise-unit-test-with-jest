const { sum } = require('./app.js')

test('adds 14 + 9 to equal 23', ()=>{
    let total = sum(14,9)
    expect(total).toBe(23)
})

test('one euro Should be 1.2 dollars', function(){
    const { fromEuroToDollar } = require('./app.js')
    const euro = 3.5
    const expected = euro * 1.2
    expect(fromEuroToDollar(euro)).toBe(expected)
})

test('one dolar Should be', function(){
    const { fromDollarToYen } = require('./app.js')
    const dollar = 3.5
    const expected = 127.9*(dollar/1.2)
    expect(fromDollarToYen(dollar)).toBe(expected)
})

test('one dolar Should be 1', function(){
    const { fromYenToPound } = require('./app.js')
    const yen = 3.5
    const expected = 0.8 * (yen / 127.9)
    expect(fromYenToPound(yen)).toBe(expected)
})
