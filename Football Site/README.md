https://pomnabo.github.io/Football%20Site/index.html



Initial: 09/05/2023

This is the README file for your website.

Start by unzipping the files to your computer; wherever you wish to save it for your future reference. You can preview your website before uploading it by simply opening the "index.html" document in your preferred browser. If you are pleased with the site, you can upload it to your web host.

(Note: your Javascript counter may not appear in this preview because you are viewing it locally. I tested the site on github, and your javascript counter works fine once it's live.)


Once you have unzipped your website files, you should be able to upload them directly to your web host's server. Your site should be live as soon as its uploaded, but follow your web host's procedures in regards to how you upload html code to your website.

Your images and font files are located within the "assets" folder. If for whatever reason your webhost isn't reading the file locations, you will need to change these to the specific locations within your web host's server directory.



*!* Notes *!*
When you add any new images to any of the pages, be sure to add:
class="img-responsive"
after the url. This will ensure the images change size as the screen size changes, and will ensure the pages' formattings will remain consistent throughout the website.


Update 09/20/2023: Moving some notes from the HTML docs into here for additional reference.

Each of your pages will be wrapped within an overall div element with the id "main-content" and class "container." You want to make sure you always keep everything *inside* that div container or else the CSS style formatting wont be applied. So make sure the last line of your "<!--main content-->" section is the matching ```</div>``` to the main-content container. I added notes in the HTML doc as well to help!

The CSS document has the style formatting for all the tags used on your site, so you should be able to use whichever tags you need, and they will adopt the formatting. (Note: I did not include literally all possible tags; just the ones I used for your site. If you use a tag that isn't styled, then it won't receive any formatting.)

You can use "<h2></h2>" to mark each content section within a page on your site. It will appear the same way as all other h2 headers.

Use "<br>" whenever you need to input a line break, instead of "<p>" otherwise it could throw off the page's formatting.

Use "<p></p>" tags around your content to create a new paragraph of text/content. you can also add: class="text-center" :to center an element tag.

If you want the same color/font styles as the text under the "week's results" featured on the "Previous Weeks" page, insert: id="season-winners" :after the tag (within the brackets).





For additional help with this design, feel free to email me at: pomnabollc@gmail.com