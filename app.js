// THEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEMETHEME
// starts with the dark theme

let activateLightTheme = document.getElementById("body")

function theme () {
    if (activateLightTheme.className != "light") {
        activateLightTheme.className = "light";
    }
    else {
        activateLightTheme.className = "dark";
    }
}

// MODESELECTIONMODESELECTIONMODESELECTIONMODESELECTIONMODESELECTIONMODESELECTIONMODESELECTIONMODESELECTIONMODESELECTIONMODESELECTIONMODESELECTIONMODESELECTION

let conversionSegment = document.getElementsByClassName('conversion')
let calculatorSegment = document.getElementsByClassName('calculator')
let ruleSegment = document.getElementsByClassName('rule')
console.log('calculatorSegment')

function conversion () {
    ruleSegment[0].style.visibility = 'hidden';
    calculatorSegment[0].style.visibility = 'hidden';
    conversionSegment[0].style.visibility = 'visible';
    ruleSegment.style.zIndex = '-1';
    calculatorSegment.style.zIndex = '-1';
    conversionSegment.style.zIndex = '1';
}

function rule () {
    conversionSegment[0].style.visibility = 'hidden';
    calculatorSegment[0].style.visibility = 'hidden';
    ruleSegment[0].style.visibility = 'visible';
    conversionSegment.style.zIndex = '-1';
    calculatorSegment.style.zIndex = '-1';
    ruleSegment.style.zIndex = '1';
}

function calculator () {
    conversionSegment[0].style.visibility = 'hidden';
    ruleSegment[0].style.visibility = 'hidden';
    calculatorSegment[0].style.visibility = 'visible';
    conversionSegment.style.zIndex = '-1';
    ruleSegment.style.zIndex = '-1';
    calculatorSegment.style.zIndex = '1';
}


// CONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSION

let input = document.getElementById("users-number")

let finalResultLength = document.getElementById("length")
let finalResultVolume = document.getElementById("volume")
let finalResultMass = document.getElementById("mass")

finalResultLength.textContent = "0 meters = 0.000 feet | 0 feet = 0.000 meters"
finalResultVolume.textContent = "0 liters = 0.000 gallons | 0 gallons = 0.000 liters"
finalResultMass.textContent = "0 kilos = 0.000 pounds | 0 pounds = 0.000 kilos"

let resultMetricToAmericanLength = 0
let resultMetricToAmericanVolume = 0
let resultMetricToAmericanMass = 0
let resultAmericanToMetricLength = 0
let resultAmericanToMetricVolume = 0
let resultAmericanToMetricMass = 0

input.oninput = function updateValues() {
    resultMetricToAmericanLength = input.value * 3.2808399
    resultAmericanToMetricLength = input.value / 3.2808399

    resultMetricToAmericanVolume = input.value / 3.78541178
    resultAmericanToMetricVolume = input.value * 3.78541178

    resultMetricToAmericanMass = input.value * 2.20462262
    resultAmericanToMetricMass = input.value / 2.20462262

    finalResultLength.textContent = input.value + " meters = " + resultMetricToAmericanLength.toFixed(3) + " feet | " + input.value + " feet = " + resultAmericanToMetricLength.toFixed(3) + " meters"
    finalResultVolume.textContent = input.value + " liters = " + resultMetricToAmericanVolume.toFixed(3) + " gallons | " + input.value + " gallons = " + resultAmericanToMetricVolume.toFixed(3) + " liters"
    finalResultMass.textContent = input.value + " kilos = " + resultMetricToAmericanMass.toFixed(3) + " pounds | " + input.value + " pounds = " + resultAmericanToMetricMass.toFixed(3) + " kilos"
}

// RULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULERULE

let firstNumber = document.getElementById("first-number")
let secondNumber = document.getElementById("second-number")
let thirdNumber = document.getElementById("third-number")
let finalResult = document.getElementById("result")

let explanationFirstNumber = document.getElementById("explanation-first-number")
let explanationSecondNumber = document.getElementById("explanation-second-number")
let explanationThirdNumber = document.getElementById("explanation-third-number")
let explanationResult = document.getElementById("explanation-result-number")

let result = 0

thirdNumber.oninput = function ruleOfThree() {
    result = thirdNumber.value * secondNumber.value
    result = result / firstNumber.value
    finalResult.innerText = result
    explanationFirstNumber.innerText = firstNumber.value
    explanationSecondNumber.innerText = secondNumber.value
    explanationThirdNumber.innerText = thirdNumber.value
    explanationResult.innerText = result
}
