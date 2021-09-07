
# algo print postcards

⭑*•̩̩͙⊱••••✩••••̩̩͙⊰•*⭑

[project site here](https://dottiffbot.github.io/algo-postcards/)


## tips

click anywhere to change the background color!

hit the s key to save the canvas!

hit refresh for a new name...


![postcard example](/assets/postcard1.png)


## design process


![coum postcard](/assets/coum-card.png)

I started by searching for postcards from the coum transmissions as reference. On a thumbdrive somewhere I have scans from the Victoria & Albert museum of a bunch of them. Not too many came up in an internet search, but I liked this one. My card isn't too similar but I did start with the pink rectangle.

![3D arm](/assets/hand.png)

I had this loopy idea that maybe I could 3D scan my hand and the postcard could be like I was waving or something. I have a strange glove mold my brother gave me for my birthday one year. I created a photogram of that and brought it into p5 as an obj file. 


When I added the waving hand model of the arm on the page, I noticed the arm and the rectangle interacting reminded me of a clock, so I decided to go with that.


I wanted to add a function that would change the background to a random color, and while trying to figure that out, I moved the background color into the setup, which created the trailing effect since the background wasn't being drawn everytime. I like the way this looks, so I decided to keep it. Now I kind of feel like it looks like a record player.

## code process


![example one](/assets/eg1.png)


This code is pretty simple, since I'm pretty new to p5. I started with some javascript for web, thinking about how I could randomly write people's names on the page, letter by letter from an array. I wanted the letters to be kind of randomly placed, but figured that would be difficult if there was always a varying amount of letters. I wrote it that each character is in a div and those divs are in a grid. The order of the characters in the grid shuffles each time.

![example two](/assets/talia.png) 

![example three](/assets/talia2.png)


## some issues

it's not super responsive, sorry. 

The 3D model definitely takes a lot of computing power.

In the end, for printing's sake, I tried making each name have at least 8 characters. I did not do this algorithmically, although I guess I could have with more time. 

since I ended up writing some javascript in ES6 and some in p5, when you hit save canvas, you're only going to get the image. with the names, I have to screenshot to make the cards.


If you type your details in the input, any time you hit 's' it's going to ask you to save!


## finally, printed

in the process of printing, these will all look a little different, because I am only human :-)

They came out darker than I was hoping, which made me sad! However, pretty proud of my  cutting job, I was nervous!

![cards in the grid](/assets/printed.png)

![detail of cards with back](/assets/printed_2.png)

![scattered cards](/assets/printed_3.png)

![cutting the cards](/assets/cut.png)



