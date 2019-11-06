---
---

### Background



#### Raster vs vector

What is a vector image, and how does it differ from a regular image?

In short: A raster image is made up of a grid of pixels, whereas a vector image is made up of shape definitions. Essentially, it is a set of instructions on what to draw, rather than a long list of pixels.

{% include figure.html src="1-background/raster-explained.svg" caption="Raster image" %}
{% include figure.html src="1-background/vector-explained.svg" caption="Vector image" %}



#### Benefits of vector graphics

A vector graphic can be scaled to any size with perfect clarity and definition.
Internally, when a program displays a vector graphic, it calculates the shapes and "renders" them to a grid of pixels with the same resolution as your monitor.
This way you always get a smooth, crisp result.

A raster graphic can be scaled to any size too, but requires some sort of algorithm to interpolate what should go in between the original pixels, which usually produces poor, blurry results.

{% include figure.html src="1-background/raster-enlarged.png" caption="Raster image, enlarged" %}
{% include figure.html src="1-background/vector-enlarged.png" caption="Vector image, enlarged" %}

In addition, vector graphics usually have a smaller file size than raster graphics, because they are defined by a few lines of text that describe shapes, rather than many rows and columns of individual pixels.

<i class="fas fa-lg fa-question-circle"></i>What's an example of vector graphics that almost everyone has used?  
<i class="fas fa-lg fa-exclamation-circle"></i>Answer: <span class="spoiler">Fonts. Most fonts are vector based so text can be scaled to any size.</span>



#### Limitations of vector graphics

Because vector graphics are drawn with shapes, they are better suited to simpler, less detailed, more "geometric" images.
More "photographic" images, such as realistic depictions of people, animals, etc, are usually better captured by raster images.

{% include figure.html src="1-background/vector-example-1.svg" caption="Simple vector image" class="medium_img" %}
{% include figure.html src="1-background/vector-example-2.svg" caption="Complex vector image" class="medium_img" %}
{% include figure.html src="1-background/raster-example.png" caption="Raster image" class="medium_img" %}



#### What is SVG

[SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) is the most popular general-purpose vector graphic format.
It was developed by the [W3C](https://www.w3.org/), the organization in charge of defining web standards like [HTML](https://en.wikipedia.org/wiki/HTML) and [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets).

{% include figure.html src="1-background/svg-logo.svg" caption="SVG logo" %}
{% include figure.html src="1-background/w3c-logo.svg" caption="W3C logo" %}

SVG was originally aimed at the web, but it became so popular that you now see it in a lot of other contexts too, like Word documents, PDFs, graphs, illustrations, graphic design, printed media, etc.
Keep this in mind when using SVGs outside of a browser: the context you're using it in might not support all of the advanced features that a browser does, _because it has essentially co-opted the technology from another platform_.
