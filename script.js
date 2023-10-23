let height = document.querySelector('.container .height input');
let weight = document.querySelector('.container .weight input');
let calciBtn = document.querySelector('.container .calculate-btn');
let bmitext = document.querySelector('.container .result-box .bmi h3');
let resultBox = document.querySelector('.container .result-box');
let health_status = document.querySelector('.container .result-box .result');

calciBtn.addEventListener('click', () => {
    if (height.value != '' && weight.value != '') {
        calcuteBMI();
    }
});

let calcuteBMI = () => {
    let heightvalue = height.value;
    let weightvalue = weight.value;

    let bmi = (weightvalue / Math.pow((heightvalue / 100), 2)).toFixed(1);

    if (bmi < 18.5) {
        health_status.innerHTML = 'your are underweight 😟 \n You should increace your protein supply';
        health_status.style.color = "#ffc44d";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        health_status.innerHTML = 'your are normal weight 🙂 \n Maintain this proper Diet';
        health_status.style.color = "#4AC38D";
    } else if (bmi >= 25 && bmi <= 29.9) {
        health_status.innerHTML = 'your are overweight 😨 \n Please follow a proper diet and avoid junk';
        health_status.style.color = "#ff884d";
    } else {
        health_status.innerHTML = 'your are in the obese range 😱 \n You should avoid eating junk';
    }

    bmitext.innerHTML ="Your BMI is : "+bmi;
    resultBox.style.display = 'block';
}