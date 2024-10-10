
const bingoTitle = document.getElementById("bingoTitle");
const boardDiv = document.getElementById("boardContainer");
let gridAxis;

function bingoBoardFinal() { /* when this function is called, it will generate a grid of squares based on the user criteria */

    /* variables MUST be present inside the function to get the input value when the button is called. this is because we only want to call those variables and their user input when the button is called. If they are declared before that action, it will only provide the default options present, and won't change upon user input */
    const gridSize = document.getElementById("grid-size").value;
    const freeSwitchValue = document.getElementById("freeSwitch").checked;
    const titleValue = document.getElementById("titleInput").value.trim();
    const promptsInput = document.getElementById("promptsField").value;
    

    //This will collect the prompts and put them into an array
    const promptList = promptsInput.split("-");
    const promptLength = promptList.length;
    const getPrompt = promptList[(Math.floor(Math.random() * promptList.length -[0]))]

    

/*************************this will check to make sure the user provided useable input; and if it is present, will execute the function *****************************/
    if(promptLength < gridSize || titleValue === ""){

        boardDiv.classList.add("error-msg");
        document.getElementById("bingoPreview").style.display = "block";//turns on the popup preview overlay when the 'generate' button is clicked
        bingoTitle.innerHTML = "Whoopsiedoodle!";
        boardDiv.innerHTML = "You forgot to fill something in."
        
    }
    else {
        
        if(gridSize === 49){
            gridAxis = 7;
        }else if(gridSize === 81){
            gridAxis = 9;
        }else{
            gridAxis = 5;
        }

        bingoTitle.innerHTML = titleValue;
        
        document.getElementById("bingoPreview").style.display = "block";//turns on the popup preview overlay when the 'generate' button is clicked
        

        function bingoBoxes() {
            document.getElementById("boardContainer")
        }


        for (var i = 0; i < gridSize; i++){
            var div = document.createElement("div");
            boardDiv.classList.add("bingo-box");
            boardDiv.textContent = getPrompt;

        }
        

    }


    

    console.log(gridSize, freeSwitchValue, titleValue, promptList, promptLength, getPrompt, gridAxis);
    
}



function previewOff() {
    boardDiv.classList.remove("error-msg");
    document.getElementById("bingoPreview").style.display = "none";//turns off the popup overlay when the div is clicked
}





/*
- prompt 01
- prompt 02
- prompt 03
- prompt 04
- prompt 05
- prompt 06
- prompt 07
- prompt 08
- prompt 09
- prompt 10
*/