/* In emmet, with angle bracket(>), you can add child to the element before angle bracket. So when you have:
section>(...) , the things in that parentheses, we can specify the children of section element.

We used parentheses because after that we put a plus sign to add a child next to the h1

ex) section*8>(h1>{Nice fireship-curves})+p>lorem

To serve your app locally, if you have nodejs installed, run: npx serve
If you don't have nodejs installed, you can just copy the path to the html file that you wanna serve and paste it into your browser.

In googole fonts, select Roboto Light 300 and put the html snippet in the <head> of the document. Then below that, write a
<style> that we can define all of the css styles for this project(but I created a separate css file).

position: relative; won't change the appearance of the element that has it, but it allows it's children to be absolutely positioned
within it.

Using 20vw in padding of section, make design a little more responsive.

Now we add some utility classes to distinguish between different colors, so add .blue , .red and ... .

For creating a curve, add an empty <div> below the content of a section with a class of curve.
Normally it's not a good practice to have empty <div>s lying around, but you could add content inside of there, if you want it
to sit on top of the curve itself.

Now in .curve, we wanna implement the curve with plain css.
The curve itself, will have a position of absolute and be placed at the bottom of it's parent div(section ??). So remember we set the parent
section element to position relative which is crucial, because it places the curve inside of the section as opposed to the main
body of the page.

The before and after pseudo elements are like invisible html elements that we can target with our css and in this example in .curve,
you can think of each one as a circle that we will intersect together to create the illusion of a curve.

In border-radius, if we provide it ONE value, it would create a perfect circle, but when you add a second value, it creates an ellipse
where the first argument represents the vertical radius and the second the horizontal radius.

Now we can apply the exact same styles to the ::after element of .curve as well. That will give us two circles to work with.
Now the tricky part is getting them to line up properly to look like a curve.
Now the tricky part is putting the circles in the proper location which will likely take a lot of trial and error.
Use transform: translate() which is just a fancy way to say move this element to a different location for pseudo elements of .curve .

The current implementation is causing the content to overflow horizontally, an easy way to fix is to set overflow-x: hidden; on
body (parent element).

CSS is more well suited for fireship-curves that have a single ellipse or circle.
Css is good for .bubble curve.

For complex fireship-curves we need svg. With svg, we can use a design tool or a purpose-built web app like shape devider(shapedivider.com)
to automatically draw the svg and provide the required css to add it to the UI instantly.
For .red curve in that shapedivider.com I used:
shape: waves
color:
flip: no
invert: no
top/bottom: Top
height: 500px
width: 150% ??

Then copy the html snippet. It contains an svg graphic that we can paste in the bottom of one of our sections. Then change the class name
of the div of snippet. Then copy the css snippet and then change that generated class name for div that we just changed to the new value
which in our case is .wave .
Now we have a wave better than the one we created with css with less effort.

In app.haikei.app we can generate svg backgrounds automatically. We're gonna use the layered waves option and set the direction to second
one from right and put the waves on the top and the colors are:
Background: #001220
wave color:
#FF6F61
#dd3f31

You can think of this graphic as like a fancy border or separator between content sections, so it needs to be long ans skinny.
Therefore, in diemensions, I used width: 960 height: 300
Then download it as an svg. Then create a css class called .spacer .
We wanna use the css aspect ration property, so instead of trying to manage the width and height of the element, we can use
the aspect-ratio and set it to whatever value we used for the aspect ratio on the image, then we use the image as a background
on whatever element has this class. The image should take up the entire element, so we set the background-repeat to no-repeat,
position it in the center and ... .
We may want to use this class multiple times so I'm creating a second class that defines the background-image as the svg graphic
that we just downloaded and named that class .layer1 .

Then in html, add an empty div with these created classes in order to apply that image as the transition between two <section>s .
Now again using an empty div like that is sometimes considered a bad practice, but in this case is acceptable and it's the easiest way
to get the job done.

Now with js, we wanna create an animated morphing svg.
Add a class named pink and add those spacer divs on either side of it and the top .spacer div has a class of .flip because we need
that one to do a 180.
The .flip class is a utiility that will rotate the element by 180deg.

Now let's add a rotating blob at the middle. To generate the blob, in hikai app and create two random graphics. I've downloaded them into the
project, but what we actually need, is the source code from the raw svg file. So take the svg code from one of the downloaded blobs and
paste it down inside of the section and at the end of it.

Inside of the svg code, you can see a <rect>, delete it.
We're insterested in the <path> in that <svg> and that <path> is the shape of the blob itself, that gives us one blob in the svg,
but we actually want a second blob in there as well. So go to blob2.svg and find the <g> element(group element) and copy it and it's children
from the raw svg code and then paste it as the sibling of the previous <g> in there as second one.
It's easier to use figma for this.
At this point, you should see two blobs on top of each other. Now in order to animate one blob into the other, we need to give eacah
<path> in there, an id which we'll call "blob1" and "blob2"
The instructor has 2 files named blob1.svg and blob2.svg .
Normally a morph animation is difficult to pull off but with Kute.js which feels kind of similar to green sock which both are animation libarries
and to install it, all we have to do is to add the script tag for the cdn link to the <head> of the document and then we can write scripts
by referencing a global object which is named KUTE and then it's fromTo() method and it'll use blob1 as the starting svg and then animate
to the blob2 svg and as a final arg we can add an object with some options.
With yoyo option, it will go back and forth between the two animation states.
Then call the start() on animation and that's all it takes to create an svg morphing animation with JS.

Now we need to make the second <g> (blob) to have a visibility: hiiden , so it's not visible when the animation first STARTS, then
we add some positioning css to position the blob directly underneath the main content in that section, by creating .blob-motion class.*/
