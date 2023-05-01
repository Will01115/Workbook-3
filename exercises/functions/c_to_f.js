function converCtoF(cTemp) {
    const fTemp = cTemp * (9 / 5) + 32;
    return fTemp;
}

const currentTemp = 0;
const fTemp = converCtoF(currentTemp);

console.log(`Fahrenheit: ${fTemp.toFixed(2)}`);
