let randomNumber = Math.floor(Math.random() * 100) + 1;

      const guesses = document.querySelector(".guesses");
      const lastResult = document.querySelector(".lastResult");
      const lowOrHi = document.querySelector(".lowOrHi");

      const guessSubmit = document.querySelector(".guessSubmit");
      const guessField = document.querySelector(".guessField");

      let guessCount = 1;
      let resetButton;
      guessField.focus();


      function checkGuess() {
        const userGuess = Number(guessField.value);
        if (guessCount === 1) {
          guesses.textContent = "Previous guesses:";
        }
        guesses.textContent = `${guesses.textContent} ${userGuess}`;
      
        if (userGuess === randomNumber) {
          lastResult.textContent = "You winned! :D Great time. Excellent jorb good thing! Now you can brag to everyone!";
          lastResult.style.backgroundColor = "green";
          lowOrHi.textContent = "";
          setGameOver();
        } else if (guessCount === 10) {
          lastResult.textContent = "oh you lost...yikes...that's embarassing...give it another try? ^^;";
          lowOrHi.textContent = "";
          setGameOver();
        } else {
          lastResult.textContent = "Nope :U";
          lastResult.style.backgroundColor = "red";
          if (userGuess < randomNumber) {
            lowOrHi.textContent = "Go higher maybe";
          } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Not that high!";
          }
        }
      
        guessCount++;
        guessField.value = "";
        guessField.focus();
      }
    

      guessSubmit.addEventListener("click", checkGuess);


      function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement("button");
        resetButton.textContent = "Give it another go!";
        document.body.append(resetButton);
        resetButton.addEventListener("click", resetGame);
      }


      function resetGame() {
        guessCount = 1;
      
        const resetParas = document.querySelectorAll(".resultParas p");
        for (const resetPara of resetParas) {
          resetPara.textContent = "";
        }
      
        resetButton.parentNode.removeChild(resetButton);
      
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = "";
        guessField.focus();
      
        lastResult.style.backgroundColor = "white";
      
        randomNumber = Math.floor(Math.random() * 100) + 1;
      }
      
      
      