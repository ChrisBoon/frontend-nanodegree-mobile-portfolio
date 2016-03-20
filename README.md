# Website Performance Optimization portfolio project

## Instructions

TODO: Add this before submitting

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

*I'm torn on this. It was required to push my Pagespeed Mobile score from 87 to 94, but in my tests it didn't improve onload time or total download size. Needed to get 90+ to pass project but in general I'm not happy about improving test score to no real life benefit. I realise in a real production site there may be benefits to the concept (at least until HTTP 2.0) so still good to know how to do it.

### Current Pagespeed score:
Desktop: 96/100
Mobile: 95/100