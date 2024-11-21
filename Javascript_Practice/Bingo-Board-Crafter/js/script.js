
const bingoTitle = document.getElementById("bingoTitle");
const boardDiv = document.getElementById("boardContainer");
let bingoBoard = "";
let colCount = 0;
let rowCount = 0;




function bingoBoardFinal() { /* when this function is called, it will generate a grid of squares based on the user criteria */

    /* variables MUST be present inside the function to get the input value when the button is called. this is because we only want to call those variables and their user input when the button is called. If they are declared before that action, it will only provide the default options present, and won't change upon user input */
    const gridSize = document.getElementById("grid-size").value;
    const freeSwitchValue = document.getElementById("freeSwitch").checked;
    const titleValue = document.getElementById("titleInput").value.trim();
    const promptsInput = document.getElementById("promptsField").value;
    const gridCtr = ((gridSize - 1) / 2) + 1;
    let divSquare;
    let gridAxis;
    let idCount = 1;
    

    //This will collect the prompts and put them into an array
    const promptList = promptsInput.split("-");
    promptList.shift(); //removes the empty string from the first item of the array.
    const promptLength = promptList.length;
    let newPrompt = "";

    

    
    
    //this will check to make sure the user provided useable input; and if it is present, will execute the function
    if(promptLength < gridSize || titleValue === ""){ 

        boardDiv.classList.add("error-msg");
        document.getElementById("bingoPreview").style.display = "block";//turns on the popup preview overlay when the 'generate' button is clicked
        bingoTitle.innerHTML = "Whoopsiedoodle!";
        boardDiv.innerHTML = "You forgot to fill something in."
        
    }
    else {
        /* this loop needs to be presented in the order the values are arranged in the document, otherwise it will declare "undefined" */
        bingoTitle.innerHTML = titleValue;
        
        document.getElementById("bingoPreview").style.display = "block";//turns on the popup preview overlay when the 'generate' button is clicked
        
        if(gridSize == 25){
            gridAxis = 5;
        }else if(gridSize == 49){
            gridAxis = 7;
        }else{
            gridAxis = 9;
        }        
        

        /* This creates a new div and assigns an Id number to each */
        function newSquare() {
            divSquare = document.createElement("div");
            divSquare.classList.add("bingo-box");
            divSquare.id = `${idCount}`;
            idCount++;
            boardDiv.appendChild(divSquare);

            if(gridAxis == 5){
                divSquare.classList.add("bingo-5x5");
            }else if(gridAxis == 7){
                divSquare.classList.add("bingo-7x7");
            }else{
                divSquare.classList.add("bingo-9x9");
            }            
        }

        /* This randomly selects a prompt from the user input, adds it to a div, and then removes it from the array */
        function getPrompt() {
            var randomPrompt = promptList[(Math.floor(Math.random() * promptList.length))];
            const promptIndex = promptList.indexOf(randomPrompt);          
            newPrompt = randomPrompt;
            divSquare.innerHTML = newPrompt;
            
            promptList.splice(promptIndex, 1);//This will remove items from the array so they aren't reused in subsequent squares
        }

        /* This is the function to generate the divs and simultaneously adds the prompts inside them */
        for (colCount = 0; colCount < gridAxis; colCount++) {            
            for (rowCount = 0; rowCount < gridAxis; rowCount++) {
                if ((colCount + rowCount) % 2 == 0) {
                    newSquare();
                    getPrompt();                  
                } else {
                    newSquare();
                    getPrompt();                 
                }
            }           
        }

        /* This targets the center div and removes its contents */
        if(freeSwitchValue == false){//if the switch is set to "Yes"
            let freeSquare = document.getElementById(gridCtr);
            freeSquare.innerHTML = "";
            freeSquare.classList.add("free-square");

            if(gridAxis == 5){
                freeSquare.classList.add("bingo-5x5");
            }else if(gridAxis == 7){
                freeSquare.classList.add("bingo-7x7");
            }else{
                freeSquare.classList.add("bingo-9x9");
            }
        }

        
        //need to make media queries for different screen sizes and change the dimensions of each square AND font size for each breakpoint.
        


    }//end of the if/else user input check


    

    console.log(gridSize, freeSwitchValue, titleValue, promptLength, gridAxis, colCount, rowCount, gridCtr);
    
}//end of bingoBoardFinal function



function previewOff() {
    boardDiv.classList.remove("error-msg");
    document.getElementById("bingoPreview").style.display = "none";//turns off the popup overlay when the div is clicked
    colCount = 0;
    rowCount = 0;
    boardDiv.innerHTML = "";
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
- prompt 11
- prompt 12
- prompt 13
- prompt 14
- prompt 15
- prompt 16
- prompt 17
- prompt 18
- prompt 19
- prompt 20
- prompt 21
- prompt 22
- prompt 23
- prompt 24
- prompt 25
- prompt 26
- prompt 27
- prompt 28
- prompt 29
- prompt 30
- prompt 31
- prompt 32
- prompt 33
- prompt 34
- prompt 35
- prompt 36
- prompt 37
- prompt 38
- prompt 39
- prompt 40
- prompt 41
- prompt 42
- prompt 43
- prompt 44
- prompt 45
- prompt 46
- prompt 47
- prompt 48
- prompt 49
- prompt 50
*/