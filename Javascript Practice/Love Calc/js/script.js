/*
function closeAlert(){
    const alertBox = document.getElementById("fancyAlert");
    alertBox.style.display = "none";
}

function fancyAlert(){
    const alertBox = document.getElementById("fancyAlert");
    alertBox.style.display = "block";
}



let alertBox = document.getElementById("fancyAlert");
let btnMsgContainer = document.getElementById("btn-msg");
let customBtn = document.querySelector(".custom-btn");
let closeBtn = document.querySelector("close-btn");
let body = document.querySelector("body");

*/


function calculateLove(){
    
    const starsignSelf = document.getElementById("starsignSelf").value.trim();
    const starsignPartner = document.getElementById("starsignPartner").value.trim();
    
    if(starsignSelf ==="" || starsignPartner ===""){
        /*
        customBtn.addEventListener("click", function(){
            btnMsgContainer.innerHTML = "You forgot to add your signs!";
            alertBox.style.display = "block";
        });

        closeBtn.addEventListener("click", function(){
            alertBox.style.display = "none";
        });
         */       
        
        alert("You forgot to add your signs!");
        
    }
    else{
        const lovePercentage = Math.floor(Math.random() * 101);
        const result = document.getElementById("result");

        result.innerHTML = `${starsignSelf} and ${starsignPartner} 's compatability: ${lovePercentage}`;

        if(lovePercentage <19){
            result.innerHTML += "<br> Probably don't..."
        }
        else if(lovePercentage >= 19 && lovePercentage < 45){
            result.innerHTML += "<br> eh...You could do better." 
        }
        else if(lovePercentage >= 45 && lovePercentage <80){
            result.innerHTML += "<br>  It could work! Give it a shot!"
        }
        else{
            result.innerHTML += "<br> The stars are aligned in your favor! Go get'm!"
        }
    }
}