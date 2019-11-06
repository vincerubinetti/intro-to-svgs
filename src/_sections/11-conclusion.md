---
---

### Conclusion



#### Beyond

There are many other advanced capabilities that SVG has to offer; too many to cover in a single tutorial:

- All sorts of metadata -- like `<title>` and `<desc>` -- can be embedded that can serve various purposes for users and editing software
- Custom `<pattern>`'s (eg checkerboard) can be defined and used for `fill` or `stroke`
- Shapes can be cut out of and into other shapes using `<clipPath>` and `<mask>`
- You can draw holes into single shapes using the special `evenodd` fill rule
- You can write text along arbitrary paths using `<textPath>`
- For images with a lot of duplicate objects, you can define an object once and reference it from other places in the image
- You can create custom filters to produce all sorts of interesting visual effects
- Presentation attributes can be animated with CSS `@keyframes` to make cool animations
- Various external sources can be embedded into SVGs, including raster images, HTML elements, and even other SVGs
- ...and much more

{% include figure.html src="9-conclusion/beyond-1.svg" caption="Pattern" %}

{% include figure.html src="9-conclusion/beyond-2.svg" caption="Mask" %}

{% include figure.html src="9-conclusion/greene-lab-animated.svg" caption="Animation" %}



#### Wrap-up

SVG is a [giant and complex specification](https://www.w3.org/TR/SVG/).
What has been covered in this tutorial is hopefully 90% of what you will ever need, but it is still only the tip of the iceberg in terms of the number of features and concepts.

When you Google for help, or when you open a software-generated SVG, you will likely see many things you don't understand.
This is okay and normal, even for people who have worked with SVG a lot.

You'll run into thing that are legacy: old features that have been deprecated but are still included to support really old software.
Always check to see if it's something you really need.

And you'll run into things that are cutting edge: proposed additions to the specification that are very new and not widely supported yet.
Always test your images on multiple devices/browsers/platforms to make sure they work reliably.
