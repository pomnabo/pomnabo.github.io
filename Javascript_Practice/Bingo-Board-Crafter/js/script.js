
const bingoTitle = document.getElementById("bingoTitle");
const boardDiv = document.getElementById("boardContainer");
let colCount = 0;
let rowCount = 0;

/* This will hide the free space text field when the user switches it to "NO" */
function customFreeSpace() {
    if (document.getElementById("freeSwitch").checked) {
        document.getElementById("cstmFree").style.display = "none";
    } else {
        document.getElementById("cstmFree").style.display = "block";
    }
}


function bingoBoardFinal() { /* when this function is called, it will generate a grid of squares based on the user criteria */

    /* these variables MUST be present inside the function to get the input value when the button is called. this is because we only want to call those variables and their user input when the button is called. If they are declared before that action, it will only provide the default options present, and won't change upon user input */
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
    if(promptLength < gridSize){ 

        boardDiv.classList.add("error-msg");
        document.getElementById("bingoPreview").style.display = "block";//turns on the popup preview overlay when the 'generate' button is clicked
        bingoTitle.innerHTML = "Whoopsiedoodle!";
        boardDiv.innerHTML = "You forgot to fill something in."
        
    } else {/* this loop needs to be presented in the order the values are arranged in the document, otherwise it will declare "undefined" */

        /* This adds the user input title to the bingo board */
        bingoTitle.innerHTML = titleValue;       
   
        /* This turns on the popup preview overlay when the 'generate' button is clicked */
        document.getElementById("bingoPreview").style.display = "block";
        
        /* This changes the grid axis values */
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
            let freeSpaceInput = document.getElementById("freeSpaceInput").value;
            let freeSquare = document.getElementById(gridCtr);
            freeSquare.innerHTML = freeSpaceInput;
        }
        
        
        //add print and download functions for their respective icons
        //need to make media queries for different screen sizes and change the dimensions of each square AND font size for each breakpoint.
        //planned customizing styles: glassmorphic with gradiant background; can change colors. basic color changing and font selection
        //planned app function: save the div to user profile along with it's customization settings
        //planned app function: interactive bingo boards; self managed, or synced with others in the group

       
    }//end of the if/else user input check    

    console.log(gridSize, freeSwitchValue, titleValue, promptLength, gridAxis, colCount, rowCount, gridCtr);
    
}//end of bingoBoardFinal function


/* This adds in the dropdown menu items */
function toggleMenu() {
    const menuContainer = document.getElementById("menuContainer");            
    if (menuContainer.style.display === "block") {
        menuContainer.style.display = "none";
    } else {
        menuContainer.style.display = "block";
        closeBtn.addEventListener("click", previewOff);                
    }
}

function printBingo() {
    const getBoard = document.querySelector("bingoPreview");
    menuContainer.style.display = "none";
    window.print();
}

function downloadBingo() {
    menuContainer.style.display = "none";
    const makeImg = document.getElementById("bingoPreview");
    //makeImg.classList.add("zoom-out");
    html2canvas(makeImg).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        window.location.href = base64image;
    });
}


/* This will close the popup window */
function previewOff() {
    boardDiv.classList.remove("error-msg");
    document.getElementById("bingoPreview").style.display = "none";//turns off the popup overlay when the div is clicked
    colCount = 0;
    rowCount = 0;
    boardDiv.innerHTML = "";
    menuContainer.style.display = "none";
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