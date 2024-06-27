function calculateTip(){

    //console.log("check");
    //it's good to check your functions work as you go!

    const billAmntInput = document.getElementById("billAmnt");
    const srvcRateSelect = document.getElementById("srvcRate");
    const groupAmntInput = document.getElementById("groupAmnt");
    const mealTypeSelect = document.getElementById("mealType");

    const tipAmntOutput = document.getElementById("tipAmnt");
    const totalAmntOutput = document.getElementById("totalAmnt");
    const splitBillAmntOutput = document.getElementById("splitBillAmnt");

    const billAmnt = parseFloat(billAmntInput.value);
    const srvcRate = parseFloat(srvcRateSelect.value);
    const groupAmnt = parseFloat(groupAmntInput.value);
    const mealType = mealTypeSelect.value;

    if(isNaN(billAmnt) || isNaN(srvcRate) || isNaN(groupAmnt)){
        tipAmntOutput.textContent = "Please enter a valid number."
        totalAmntOutput.textContent = "";
        splitBillAmntOutput.textContent = "";
        return;
    }

    let tip;
        switch(srvcRate){
            case 1:
                //tip = `${billAmnt * 0} + "No tip needed!"`;
                tip = billAmnt * 0;
                break;

            case 2:
                tip = billAmnt * 0.1;
                break;
            
            case 3:
                tip = billAmnt * 0.2;
                break;
            
            case 4:
                tip = billAmnt * 0.25;
                break;

            case 5:
                tip = billAmnt * 0.3;
                break;
        }

        let totalAmnt = billAmnt + tip;
        let splitBillAmnt = totalAmnt / groupAmnt;

        if(mealType === "dinner"){
            tip += 5;
            totalAmnt += 5;
            groupAmnt += 5;
        }

        
       /* if(srvcRate === "None/Self Service"){
            tipAmntOutput.textContent = `"No tip needed!"`;
        }
        else{
            tipAmntOutput.textContent = `Gratuity: $${tip.toFixed(2)}`;
        }*/
        tipAmntOutput.textContent = `Gratuity: $${tip.toFixed(2)}`;
        totalAmntOutput.textContent = `Total with Gratuity: $${totalAmnt.toFixed(2)}`;
        splitBillAmntOutput.textContent = `Each person pays: $${splitBillAmnt.toFixed(2)}`;

}

const calcBtn = document.getElementById("calculateTip").addEventListener("click",calculateTip);