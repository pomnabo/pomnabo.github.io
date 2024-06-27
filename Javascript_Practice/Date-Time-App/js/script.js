let dateContainer = document.querySelector(".date-container");
let hrsContainer = document.querySelector(".hrsTime");
let minContainer = document.querySelector(".minTime");
let secContainer = document.querySelector(".secTime");


const weekdays =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const monthNames =[
    "January",
    "Febrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

//const yearNum = getFullYear();

function formatTime(time){
    return time < 10 ? "0" + time : time;
}

function updateClock(){

    const today = new Date();
    
    let date = today.getDate();
    
    let day = weekdays[today.getDay()];
    let month = monthNames[today.getMonth()];
    //let year = yearNum[todayDate.getFullYear()];

    let hours = formatTime([today.getHours()]);
    let minutes = formatTime([today.getMinutes()]);
    let seconds = formatTime([today.getSeconds()]);

    dateContainer.innerHTML = `
        ${day}
        <br><span>${date}</span>
        <br>${month}
    `;

    hrsContainer.textContent = hours;
    minContainer.textContent = minutes;
    secContainer.textContent = seconds;

}

setInterval(updateClock,1000);