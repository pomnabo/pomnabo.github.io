function truePali(str){

    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanStr);

    const reversedStr = cleanStr.split("").reverse().join("");
    console.log(reversedStr);

    return cleanStr === reversedStr;
}

function palindromeCheck(){    

    const inputText = document.getElementById("inputText");
    const results = document.getElementById("results");

    if(truePali(inputText.value)){

        results.textContent = `WEW! "${inputText.value}" is a Palindrome!`
    }
    else{
        results.textContent = `oof...sorry. "${inputText.value}" is NOT a Palindrome...rude...`;
    }

    results.classList.add("fadeIn");
    inputText.value = "";
}


document.getElementById("checkBtn").addEventListener("click",palindromeCheck);