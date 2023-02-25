'use strict'

const heightInput = document.getElementById('heightInput');
const weightInput = document.getElementById('weightInput');
const feetInput = document.getElementById('feetInput');
const inchesInput = document.getElementById('inchesInput');
const poundsInput = document.getElementById('poundsInput');
const resultBMI = document.getElementById('resultBMI');
const btnUnits = document.getElementById('btnUnits');


// calculate bmi in US
function calculateImperialBMI() {
    const feet = Number(feetInput.value);
    const inches = Number(inchesInput.value);
    const pounds = Number(poundsInput.value);

    const usHeight = (feet * 12) + inches;
    
    const imperialUnits = (pounds / (usHeight * usHeight)) * 703;

    console.log(imperialUnits.toFixed(1));
    generateResults(imperialUnits.toFixed(1));
}

// calculate bmi in Metric
function calculateMetricBMI() {
    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    const heightCm = height / 100;

    const metricUnits = weight / (heightCm * heightCm);

    console.log(metricUnits.toFixed(1));
    generateResults(metricUnits.toFixed(1));

}

// preform calculation based on switched units
function calculateBMI() {
    if(btnUnits.children[1].textContent === 'US units' && heightInput.value && weightInput.value) {
        calculateMetricBMI();
    } else if(btnUnits.children[1].textContent === 'Metric units' && feetInput.value && inchesInput.value && poundsInput.value) {
        calculateImperialBMI();
    } else {
        alert('Please fill the inputs');
        resultBMI.innerText = '';
    }
}

// generate result of bmi with messages
function generateResults(bmi) {
    resultBMI.innerText = bmi;
    
    if(bmi < 18.5) {
        resultBMI.innerHTML = `<h2 class="bmiNumber">${bmi}</h2>
                                <p>BMI less than <b>18.5</b> is considered <span style="color: #6BB7EA">Underweight</span>.</p>
                                <p><span>Advice:</span> Focus on healthy weight gain through a balanced diet and strength training.</p>`;
    } else if(bmi >= 18.5 && bmi <= 24.9) {
        resultBMI.innerHTML = `<h2 class="bmiNumber">${bmi}</h2>
                                <p>BMI between <b>18.5</b> and <b>24.9</b> is considered <span style="color: #76C043">Healthy</span>.</p>
                                <p><span>Advice:</span> Maintain your weight by staying active and eating a balanced diet.</p>`;
    } else if(bmi >= 25 && bmi <= 29.9) {
        resultBMI.innerHTML = `<h2 class="bmiNumber">${bmi}</h2>
                                <p>BMI between <b>25</b> and <b>29.9</b> is considered <span style="color: #FED93C">Overweight</span>.</p>
                                <p><span>Advice:</span> Focus on weight loss through dietary changes and regular exercise.</p>`;
    } else if(bmi >= 30 && bmi <= 34.9) {
        resultBMI.innerHTML = `<h2 class="bmiNumber">${bmi}</h2>
                                <p>BMI between <b>30</b> and <b>34.9</b> is considered <br><span style="color: #F17C67">Obesity (Class 1)</span>.</p>
                                <p><span>Advice:</span> Make significant dietary changes and incorporate regular exercise to improve your health.</p>`;
    } else if(bmi >= 35 && bmi <= 39.9) {
        resultBMI.innerHTML = `<h2 class="bmiNumber">${bmi}</h2>
                                <p>BMI between <b>35</b> and <b>39.9</b> is considered <br><span style="color: #CD5C5C">Obesity (Class 2)</span>.</p>
                                <p><span>Advice:</span> Seek professional help for weight management, including significant dietary changes, regular exercise, and potentially medical treatments or weight loss surgery.</p>`;
    } else if(bmi > 40) {
        resultBMI.innerHTML = `<h2 class="bmiNumber">${bmi}</h2>
                                <p>BMI greater than <b>40</b> is considered <br><span style="color: #8B0000">Obesity (Class 3)</span>.</p>
                                <p><span>Advice:</span> Seek immediate professional help for weight management, including potentially intensive medical interventions.</p>`;
    }
}

// toggle units
btnUnits.addEventListener('click', () => {
    if(btnUnits.children[1].textContent === 'US units') {
        document.querySelector('.inputs-wrapper--us-units').classList.remove('d-none');
        document.querySelector('.inputs-wrapper--metric-units').classList.add('d-none');
        btnUnits.children[1].textContent = 'Metric units';
    } else {
        document.querySelector('.inputs-wrapper--us-units').classList.add('d-none');
        document.querySelector('.inputs-wrapper--metric-units').classList.remove('d-none');
        btnUnits.children[1].textContent = 'US units';
    }
});