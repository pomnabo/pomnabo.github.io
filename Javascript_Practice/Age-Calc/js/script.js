function calculateAge(){

    const todayDate = new Date();
    const bdayInput = document.getElementById("birthdate").value;
    const bdayParts = bdayInput.split("-");
    const bdayYear = bdayParts[0];
    const bdayMonth = bdayParts[1] - 1;
    const bdayDay = bdayParts[2];
    const bdayDate = new Date(bdayYear, bdayMonth, bdayDay);

/*
    const isValidDate = (date) =>{

        return(
            Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
        );
    };
    

    if(!isValidDate(bdayDate)){

        alert("Invalid Date Format. Please Enter a Valid Date in DD/MM/YYYY");
        return;
    }
*/
    const ageInMillSec = todayDate - bdayDate;
    const ageInSeconds = Math.floor(ageInMillSec / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30.436875); //this is an approximation of days in a month.
    const ageInYears = Math.floor(ageInDays / 365.25); //this is an approximation to account for leap years.


    const resultContainer = document.getElementById("resultContainer");
    const ageResult = document.getElementById("ageResults");

    ageResult.innerHTML = `
                <div class="results-item">
                    <h3>Your Exact Age:</h3>
                    <p>${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 30} Days</p>
                </div>
                <div class="results-item">
                    <h3>Months Passed:</h3>
                    <p>${ageInMonths}</p>
                </div>
                <div class="results-item">
                    <h3>Weeks Passed:</h3>
                    <p>${ageInWeeks}</p>
                </div>
                <div class="results-item">
                    <h3>Days Passed:</h3>
                    <p>${ageInDays}</p>
                </div>
                <div class="results-item">
                    <h3>Hours Passed:</h3>
                    <p>${ageInHours}</p>
                </div>
                <div class="results-item">
                    <h3>Minutes Passed:</h3>
                    <p>${ageInMinutes}</p>
                </div>
                <div class="results-item">
                    <h3>Seconds Passed:</h3>
                    <p>${ageInSeconds}</p>
                </div>
                <div class="results-item">
                    <h3>Milliseconds Passed:</h3>
                    <p>${ageInMillSec}</p>
                </div>
    `;

    resultContainer.style.display = "block";


    console.log(bdayInput);
    console.log(bdayParts);
    console.log(bdayDay);
    console.log(bdayMonth);
    console.log(bdayYear);



}

const ageCalcForm = document.getElementById("ageCalculator");
ageCalcForm.addEventListener("submit",(event)=>{

    event.preventDefault();
    calculateAge();

});

