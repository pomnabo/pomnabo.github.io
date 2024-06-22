document.getElementById("bmiForm").addEventListener('submit',function(e){

    /*"e" here is an industry standard shorthand for an "event" object. */
    e.preventDefault();

    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const heightFeet = parseInt(document.getElementById("height-feet").value);
    const heightInches = parseInt(document.getElementById("height-inches").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if(gender && age && heightFeet && heightInches && weight){

        const heightOnlyInches = ((heightFeet * 12) + heightInches);  //height in inches
        const bmi = (weight / (heightOnlyInches * heightOnlyInches)) * 703;
        const resultElement = document.getElementById("results");

        let category = '';

        if(bmi < 18.5){
            category = 'Underweight';
        }
        else if(bmi >= 18.5 && bmi < 24.9){
            category = 'Normal Weight';
        }
        else if(bmi >= 25 && bmi < 29.9){
            category = "Over Weight"
        }
        else{
            category = "Clinically Obese"
        }

        let resultMessage = "Your BMI: " + bmi.toFixed(2) + "<br>";
        resultMessage += category;

        resultElement.innerHTML = resultMessage;
    }

})