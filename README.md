# Website Performance Optimization portfolio project

## Instructions

### To view hosted version GitHub:
http://chrisboon.github.io/frontend-nanodegree-mobile-portfolio/build/

### Github repo:
https://github.com/ChrisBoon/frontend-nanodegree-mobile-portfolio

### To view locally once downloaded:
For minified, compressed, and optimized files view the 'build' folder.
To see my working files view the 'app' folder.

## Optimizing index.html

### Add grunt task to perform various optimizations:
- remove unnecassary browser-prefixes (and add required ones) [PostCSS/Autoprefixer]
- minify CSS (+ other optimizations) [PostCSS/CSSNano]
- minify HTML [HTMLMin]
- minify JS [uglify]
- losslessly compress images [imagemin]

### Further optimizations include:

- Optimize images to serve resolution required
- Make analytics js async
- Removed link to web font - reduced size of site but at loss of Design control - would not do this in a production site without approval of Design team.
- Inline Critical CSS*

*I'm torn on this. It was required to push my Pagespeed Mobile score from 87 to 94, but in my tests it didn't improve onload time. Needed to get 90+ to pass project but in general I'm not happy about improving test score to no real life benefit. I realise in a real production site there may be benefits to the concept (at least until HTTP 2.0) so still good to know how to do it. Also it's possible that some browsers/devices would see improvement and that I only didn't see it due to limited testing.

### Current Pagespeed score:
Desktop: 96/100
Mobile: 95/100

## Speeding up pizza.html

### Frame Rate (scrolling)
In order to make views/pizza.html render with a consistent frame-rate at 60fps when scrolling I did the following:
- Removed repeated call to 'document.body.scrollTop' from within the loop.
- Check viewport size and create the correct number of pizzas to fill the vewport. (Reruns on resize to make sure we don't wind up with too few/many pizzas if user's viewpor size changes)
- use 'translate3D' instead of 'left' to move pizzas (note could become problematic if somehow a screen was big enough for 1000s of pizzas)
- Store reference to "document.querySelectorAll('.mover')" result as variable - previously we looked it up on every scroll event.
- Use requestanimationframe to update moving pizzas.

## Computational Efficiency
In order to make sure time to resize pizzas is less than 5 ms using the pizza size slider on the views/pizza.html page, I did the following:
- Switched to using percentage widths. This allowed me to avoid querying the DOM at all.
- Moved the logic for deciding on the size to make the pizza out of a loop. Previously it was getting calculated individually on each pizza but the result was always the same.
These two improvements were enough to take resize down from approx. 175ms to <1ms on my test device.