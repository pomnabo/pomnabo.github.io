

const gridSize = document.getElementById("grid-size").value;
const promptsInput = document.getElementById("promptsField").value;



const bingoBoard = document.getElementById("bingoPreview");



function bingoBoardFinal() {

    const freeSwitchValue = document.getElementById("freeSwitch").checked;
    console.log(freeSwitchValue);

    /* when this function is called, it will generate a grid of squares based on the criteria */
}

const bingoBtn = document.getElementById("makeBingoBtn");
bingoBtn.addEventListener('click', bingoBoardFinal);