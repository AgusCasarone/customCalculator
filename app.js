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

// CONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSIONCONVERSION

let input = document.getElementById("users-number")

let testParagraphTwo = document.getElementById("test-me-two")
let testParagraph = document.getElementById("test-me")

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

// MODESELECTIONMODESELECTIONMODESELECTIONMODESELECTIONMODESELECTIONMODESELECTIONMODESELECTIONMODESELECTIONMODESELECTIONMODESELECTIONMODESELECTIONMODESELECTION

let conversionButton = document.getElementsByClassName('conversion')
let calculatorButton = document.getElementsByClassName('calculator')
let ruleButton = document.getElementsByClassName('rule')

function conversion () {
    document.getElementsByClassName('conversion')[0].style.visibility = 'visible';
    document.getElementsByClassName('rule')[0].style.visibility = 'hidden';
    document.getElementsByClassName('calculator')[0].style.visibility = 'hidden';
}

function rule () {
    document.getElementsByClassName('rule')[0].style.visibility = 'visible';
    document.getElementsByClassName('conversion')[0].style.visibility = 'hidden';
    document.getElementsByClassName('calculator')[0].style.visibility = 'hidden';
}

function calculator () {
    document.getElementsByClassName('calculator')[0].style.visibility = 'visible';
    document.getElementsByClassName('conversion')[0].style.visibility = 'hidden';
    document.getElementsByClassName('rule')[0].style.visibility = 'hidden';
}
