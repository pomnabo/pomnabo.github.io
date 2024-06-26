https://pomnabo.github.io/Javascript_Practice/RGB-Color-Gen/

------------------------------
PROJECT: RGB Color Generator

Overview:

This is 6 of 10 small javascript project tutorials featured in Vijay Kumar's Udemy course. In this tutorial, the viewer is guided through writing an interactive RGB color selection interface.

Was excited for this specific tutorial because I have been wanting to learn how to build this exact thing!


------------------------------
Coding Challenges:

I didn't like how the divs were aligned in the tutorial, so I switched em around; instead of each label/input/value set getting their own div, I put all the labels, inputs, and value spans in their own respective divs. Then I changed the flex direction for the slider container to "row."

This achieved my desired appearance where the text and values are all aligned to the left.

I initially wanted to change their position so the button was above the div, but I felt the point of that part of this tutorial was intended to have them side by side on the same row. So, I tried a few different sizes for each to get the proportions just right.

I also noticed that the sliders container was getting jittery, and difficult to adjust because the boxes were flexing in size based on the number of digits in the value spans. So, I gave the value spans a fixed width to prevent them from moving while you change the slider around.

The last challenge I encountered was that the sliders don't reset to their default positioning at 0,0,0. When I removed "updateColor();" it resets, but then the size of the finalRGB values div is too short upon reset, and doesn't look uniform. I think it would be cool to have it show a random color every time its refreshed, as its starting point.

------------------------------
Other Notes:

There were some opperands (if that's what they're called) that I am unfamiliar with, and unsure why they're used in this tutorial. It had to do with the copy error check that was also in the tutorial (which he didn't expain why it was there; so am confusion); specifically the use of "=>" as a part of the ".then/.catch" functions.