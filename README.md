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
- Inline Critical CSS

### Current Pagespeed score:
Desktop: 96/100
Mobile: 95/100