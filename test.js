
const sum = function(a, b) {
    return a + b;
}
test("One euro should be 1.07 dollars", function() {
  
    const { fromEuroToDollar} = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    
     expect(fromEuroToDollar(3.5)).toBe(3.745); 
})
test("1.07 dollars should be 156.5 yen", function(){

    const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js')
    const dollars = fromDollarToYen(2)
    const expected = (2 * 1.07) * 156.5;

    expect(fromDollarToYen(2)).toBe(292.5233644859813); 
})
test("156.5 yen should be 0.87 pounds", function(){

    const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js')
    const yen = fromYenToPound(313)
    const expected = (313 / 156.5) * 0.87;
    expect(fromYenToPound(313)).toBe(1.74); 
})