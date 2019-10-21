var resultValue = 0;
var value1 = 0;
var value2 = 0;
var isSum = false;
var isSubtract = false;
var isMultiply = false;
var isDivide = false;

function showResult() {
    var valueElement = document.getElementById("resultado");

    if (isSum) {
        resultValue = value1 + value2;
        valueElement.value = resultValue;
        isSum = false;
    } else if (isSubtract) {
        resultValue = value1 - value2;
        valueElement.value = resultValue;
        isSubtract = false;
    } else if (isMultiply) {
        resultValue = value1 * value2;
        valueElement.value = resultValue;
        isMultiply = false;
    } else {
        resultValue = value1 / value2;
        valueElement.value = resultValue;
        isDivide = false;
    }
    console.log('Resultado: '+resultValue);
}

function sum() {
    isSum = true;
}

function subtract() {
    isSubtract = true;
}

function multiply() {
    isMultiply = true;
}

function divide() {
    isDivide = true;
}

function numReceived(num) {
    var valueParameter = num;
    if (value1 == 0)
        value1 = valueParameter;
    else
        value2 = valueParameter;
}