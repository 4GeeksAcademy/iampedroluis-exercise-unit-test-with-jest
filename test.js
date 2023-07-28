const { sum } = require('./app.js')

test('adds 14 + 9 to equal 23', ()=>{
    let total = sum(14,9)
    expect(total).toBe(23)
})

test('one euro Should be 1.206 dollars', function(){
    const { fromEuroToDollar } = require('./app.js')
    
    expect(fromEuroToDollar(3.5)).toBe(4.2)
})