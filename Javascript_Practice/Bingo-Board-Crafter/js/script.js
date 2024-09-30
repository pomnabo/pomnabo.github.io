


const promptsInput = document.getElementById("promptsField").value;



const bingoBoard = document.getElementById("bingoPreview");



function bingoBoardFinal() { /* when this function is called, it will generate a grid of squares based on the criteria */

    document.getElementById("bingoPreview").style.display = "block";//turns on the popup preview overlay when the 'generate' button is clicked

    const gridSize = document.getElementById("grid-size").value;

    const freeSwitchValue = document.getElementById("freeSwitch").checked; //MUST be present inside the function to get the checkbox value when the button is called.
    console.log(freeSwitchValue, gridSize);

    
}

const bingoBtn = document.getElementById("makeBingoBtn");
bingoBtn.addEventListener('click', bingoBoardFinal);


function previewOff() {
    document.getElementById("bingoPreview").style.display = "none";//turns off the popup overlay when the div is clicked
}