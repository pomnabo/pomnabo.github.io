https://pomnabo.github.io/Javascript_Practice/Unicode-Char-Gen/

------------------------------
PROJECT: Unicode Character Generator Application

Overview:

This is 9 of 10 small javascript project tutorials featured in Vijay Kumar's Udemy course. In this tutorial, the viewer is guided through writing a simple interface that retrieves the unicode for their respective characters/symbols.

------------------------------
Coding Challenges:

The HTML and CSS went smoothly, as they have been. I managed to construct the html fully from just the demo alone, save maybe a difference in syntax usage (I initially used a div, where the instructor used a <p>).

The javascript, however, did not work after completing the tutorial...

After my first time reviewing everything, including the html, I realized the onclick event for the button didn't have the parentheis after the function name; so I added that in.

The button fired when I didn't have any input value, but when I typed a character in the input field, it didn't work.

After a quick google search, I remembered I could look at the debugger when inspecting the page! (I know, I know, I'm a genius :P)
Ater looking at the debugger, I realized I had accidentally added ".textContent" when declaring the unicodeValue variable. I had added it when I was trying to figure out the first issue, to see if maybe that would do anything; and forgot to remove it. Once removed, the application works as intended!