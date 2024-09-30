

const gridSize = document.getElementById("grid-size").value;
const promptsInput = document.getElementById("promptsField").value;



const bingoBoard = document.getElementById("bingoPreview");



function bingoBoardFinal() {

    document.getElementById("bingoPreview").style.display = "block";

    const freeSwitchValue = document.getElementById("freeSwitch").checked; //MUST be present inside the function to get the checkbox value when the button is called.
    console.log(freeSwitchValue);

    /* when this function is called, it will generate a grid of squares based on the criteria */
}

const bingoBtn = document.getElementById("makeBingoBtn");
bingoBtn.addEventListener('click', bingoBoardFinal);


function previewOff() {
    document.getElementById("bingoPreview").style.display = "none";
}