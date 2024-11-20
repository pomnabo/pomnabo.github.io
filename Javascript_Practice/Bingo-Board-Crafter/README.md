https://pomnabo.github.io/Javascript_Practice/Bingo-Board-Crafter/

------------------------------
"Bellefair" Font
Copyright 2015 The Bellefair Project Authors (https://github.com/shinntype/bellefair)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
http://scripts.sil.org/OFL


"Caviar Dreams" Font
Nymphont License v1.00

This license can also be found at this permalink: https://www.fontsquirrel.com/license/Caviar-Dreams

Glyph Icons courtesy of GlyphIcons:
https://glyphicons.com/


App designed and built by me, pomnabo.


------------------------------
PROJECT: Bingo Card Crafter

Overview:

My friends and I were preparing to watch the new season of ABC's 9-1-1, and wanted to play bingo throughout the season. To make crafting the cards easier, I tasked myself with this project to see what I could come up with based on what I've learned. I also felt this would be a good exercise to "get my feet wet" in creating my own projects rather than following more tutorials.

------------------------------
LOGIC:

Users input their specifications and bingo prompts into a form, and when they click the button, their board will generate with a random arrangement of the prompts they provide, each inside an individual div.

I figured this would be accomplished in roughly two major parts:
- collecting user inputs
- generating the divs

Inputs:
I wanted the inputs to be applied to the board only once the button is clicked. Based on my previous projects, I felt the best way was to create a function. As each variable was added, I added them to a console log so I could check to make sure it was functioning properly.

Once the inputs were being called correctly, my next step was to call the specific information from the bingo prompts text area, and then make sure they could each be accessed individually. To do this, I initially wanted to create them inside an array so I could separate them by a "-" hyphen. Once the array was created, I could move onto generating the divs.


Board Gen:
For the board generation, I wanted to randomly select a number of the prompts based on the user selected grid size, from the pool of all the prompts supplied, and add place each inside their own divs. My initial plan is to call each prompt randomly, one at a time, and *then* create a div for them. As each div gets created, it would fill in the board.

To ensure that the board was arranged properly, I planned to use a function from the "eloquent javascript" exercises in the first chapter. I wasn't sure exactly how to do this, but my first attempt is to create *that* board based on the user's grid size selection, number each of them, and *then* replace each number with the randomly selected prompt.

I also had to ensure that once a prompt was used, it didn't get called again, so that there weren't any repeated prompts on the board.

I then wanted to create the "free space" default div and apply it to the center of the grid, while also ensuring the user's toggle selection was followed.

I later realized that I think it would be helpful to nest this all inside a if/then alert, so to ensure that users fill in each spot. I also realized that I need to make sure there are a minimum of enough prompts provided based on the gride size selection. Lastly, I need to apply a character limit to the prompts somehow.


Result:
Once the button gets push, I will have the board generate in a popup overlay.

------------------------------
Coding Challenges:

The first major challenge I had was getting the user inputs to generate when the button gets pushed. I looked up each individual input element on google to see what sort of code I would need in order to call them through the function. I really struggled with this because my searches provided conflicting, or over complicated information, or it didn't apply at all. After some trial and error with the different suggestions, I found the best examples through MDN web docs, and w3schools; so I applied those. This also included realizing that I needed to declare the values of each input inside the function for it to work as intended.

My next challenge was creating the number of divs I wanted each time the button is pushed. At first, only one div was being created. So with some review, I decided to use a while loop with a counter based on 

The next challenge I encountered was each div having the same prompt item. Initially, I was considering assigning separate Ids to each new div created, but I thought that might things more complicated than necessary, and shelved that idea in case I couldn't find a better alternative. Thankfully, I did! I moved the randomizing selection action into its own separate function, which gets called inside the div creation loop; so that each time a div is made, the prompt is called again; which led me to my next problem.

I ended up getting duplicates! So I googled how to prevent it, and in one example I found on stack overflow, they used the splice() method. To apply this, I added a new variable to observe the index of the array of prompts, and then spliced the list starting at that index number whenever the function gets called.

Next, I was struggling to get all the divs that get created to show up within the bingo board container div. Initially it was only showing 5 divs regardless of the size of the bingo board. After moving things around, I found that nesting a separate if/else loop inside the newsquare function would change the size of the divs as intended.

My next issue was trying to create the total amount of divs based on the user's grid size selection. For this, I directly referenced the chessboard exercise from an early chapter of Eloquent JavaScript. To my delight it produced the correct number of divs as intended. But, to my chagrin , it generated them all on the same line. After looking in the wrong places for far too long, I eventually found that it was a CSS issue; an easy fix where I simply had to adjust the inline styling for the divs.


------------------------------
Other Challenges:

For smoother UI/UX, I felt nesting the instructions inside a toggle-able drop down menu would be ideal; this way, users who are familiar with how to use the crafter can keep it minimized to save screen space, *especially* if they're doing it from their phones. The first thing recommended through google searching was the "details" element. I'd never used it before, so it was fun to play around with. When first applied, the arrow appeared above it's summary, but I wanted it aligned; google searching again helped haha, and applying "display: flex;" did the trick.

To be more user friendly, I felt a toggle switch would be ideal over a check box for the "free space" selection. I found a few different ways to make this through google, and ultimately I settled with the one I found on w3schools.com; it's the only one that worked properly compared to the ones I found on other sites.


------------------------------
Additional Notes:

My initial idea is to setup a form where users can input their bingo prompts, and then once submitted, will produce the bingo board with their prompts randomly placed in a grid of divs. For smoother UI/UX, I felt it would be best to have users submit all of their prompts into a single text box, rather than individual submission lines. I figured I should put all of the prompts into a single, disugstingly long array, that way I could extract each of them based on their array sequence number, and then eventually add them to individual divs randomly.

For the "generate" button, I felt the button element would be more feasible because I wanted to ensure I could control the specific styles of each part of the form, and I felt it would smoother to do so by isolating the action button outside of the form element.

Because there will likely be a lot of prompts added, I know I will need to parse them somehow in order to grab individual prompts. To do this I felt I should require the users to start each new prompt with a plus sign "+" so that I'll be able to separate the string from the textarea box. However, after my friends and I shared our bingo prompt lists, I noticed that they mostly used "-" by default. Because of this, I felt it would be more intuitive, and better user experience, to have users parse with the "-" instead.

Initially, I wanted the bingo board to generate below the interface, but I quickly realized that would prove cumbersome for users to have to scroll down to preview their board. For a moment, I thought about having the board appear to the right of the interface in desktop mode, but I don't want to deal with media queries for a practice project like this, so I shelved that idea. I think it will be a better user experience to have their board generate to the right for easier previewing on desktop though, so I may implement that as a feature later on. For now, I resolved to have the board generate inside an overlay popup div. I felt this would be a little smoother of a user experience; especially for mobile view.

While standard bingo boards are only a 5x5 grid, I wanted to add a few additional options to at least apply my knowledge for this exercise.