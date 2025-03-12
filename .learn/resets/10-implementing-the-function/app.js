const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

function fromDollarToYen(dollarAmount) {
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};
let euroAmount = dollarAmount / oneEuroIs["USD"];
    
let yenAmount = euroAmount * oneEuroIs["JPY"];

return yenAmount;
}

function fromEuroToDollar(euroAmount){
    let oneEuroIs = {
        "JPY": 156.5, // Japan yen
        "USD": 1.07, // US dollar
        "GBP": 0.87, // British pound
    };
    let dollarAmount = euroAmount * oneEuroIs["USD"];

    return dollarAmount;
}

function fromYenToPound(yenAmount){
    let oneEuroIs = {
        "JPY": 156.5, // Japan yen
        "USD": 1.07, // US dollar
        "GBP": 0.87, // British pound
    };
    let euroAmount = yenAmount / oneEuroIs["JPY"];
    
    let poundAmount = euroAmount * oneEuroIs["GBP"]; 
 
    return poundAmount;
}
module.exports = { sum, fromEuroToDollar }