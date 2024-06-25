document.getElementById("increaseBtn").addEventListener("click",increaseCounter);

document.getElementById("decreaseBtn").addEventListener("click",decreaseCounter);

document.getElementById("resetBtn").addEventListener("click",resetCounter);


let counterDisplay = document.getElementById("counterDisplay");
let counterValue = 0;


function updateCounterDisplay(){
    counterDisplay.textContent = counterValue;
}

function increaseCounter(){
    counterValue++;
    updateCounterDisplay();    
}

function decreaseCounter(){
    if(counterValue>0){
        counterValue--;
        updateCounterDisplay();
    }    
}

function resetCounter(){
    counterValue = 0;
    updateCounterDisplay();
}