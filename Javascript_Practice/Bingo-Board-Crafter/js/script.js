
const bingoTitle = document.getElementById("bingoTitle");
const boardDiv = document.getElementById("brdSqDiv");

function bingoBoardFinal() { /* when this function is called, it will generate a grid of squares based on the criteria */

    const gridSize = document.getElementById("grid-size").value;// variables MUST be present inside the function to get the input value when the button is called.
    const freeSwitchValue = document.getElementById("freeSwitch").checked;
    const titleValue = document.getElementById("titleInput").value.trim();
    const promptsInput = document.getElementById("promptsField").value;
    const rdmNUM = Math.floor(Math.random() * gridSize);

    console.log(gridSize, freeSwitchValue, titleValue, promptsInput);

    if(gridSize === "" || freeSwitchValue === "" || titleValue === "" || promptsInput === ""){

        document.getElementById("bingoPreview").style.display = "block";//turns on the popup preview overlay when the 'generate' button is clicked
        bingoTitle.innerHTML = "Whoopsiedoodle!";
        boardDiv.innerHTML = "You forgot to fill something in."


    }
    else {

        document.getElementById("bingoPreview").style.display = "block";//turns on the popup preview overlay when the 'generate' button is clicked
        bingoTitle.innerHTML = titleValue;
        boardDiv.innerHTML = promptsInput;

    }

   // if gridSize = "49"
    
}



function previewOff() {
    document.getElementById("bingoPreview").style.display = "none";//turns off the popup overlay when the div is clicked
}