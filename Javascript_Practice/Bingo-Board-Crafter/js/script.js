
/* function genBingoBoard() {
    

}



const genBingoBtn = document.querySelector('makeBingoBtn');
genBingoBtn.addEventListener("click", genBingoBoard); */


const squareSize = document.getElementById("grid-size").value;


const freeSwitch = document.getElementById("freeSwitch").value;


let promptTextArea;
const bingoPrompts = document.getElementById("promptsField");


const genBingoBtn = document.getElementById("makeBingoBtn");
genBingoBtn.addEventListener('click', function genBingoBoard() {
    
    promptTextArea = bingoPrompts.value;

})