

function bingoBoardFinal() { /* when this function is called, it will generate a grid of squares based on the criteria */

    document.getElementById("bingoPreview").style.display = "block";//turns on the popup preview overlay when the 'generate' button is clicked

    const gridSize = document.getElementById("grid-size").value;// variables MUST be present inside the function to get the input value when the button is called.
    const freeSwitchValue = document.getElementById("freeSwitch").checked;
    const titleValue = document.getElementById("titleInput").value.trim();
    const promptsInput = document.getElementById("promptsField").value;

    console.log(gridSize, freeSwitchValue, titleValue, promptsInput);
    
}

const bingoBtn = document.getElementById("makeBingoBtn");
bingoBtn.addEventListener('click', bingoBoardFinal);


function previewOff() {
    document.getElementById("bingoPreview").style.display = "none";//turns off the popup overlay when the div is clicked
}