function convertTemperature() {
    let temperature = parseFloat(document.querySelector('input[type="number"]').value);
    let conversionType = document.getElementById('Conversion').value;
    let result; 
    if (conversionType === "Celsuis to Fahrenheit") {
        result = (temperature * 9/5) + 32;
    } else {
        result = (temperature - 32) * 5/9;
    }

     resultElement = document.getElementById('result');
resultElement.textContent = Math.round(result * 100) / 100;
}