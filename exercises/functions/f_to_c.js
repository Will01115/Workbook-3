function converFtoC(fahrenheitTempature) {
    let celssiusTempature = (fahrenheitTempature - 32) * (5 / 9);
    return celssiusTempature;
}

let currentTemp = 92;
let celsiusTemp = converFtoC(currentTemp);
console.log(celsiusTemp.toFixed(2));
