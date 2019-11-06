---
---

### Conclusion



#### Beyond

There are many other advanced features SVG has to offer; too many to cover in a single tutorial:

- All sorts of metadata can be embedded that can serve various purposes for users and editing software
- Custom patterns (eg checkerboard) can be defined and used as fills and strokes
- Shapes can be cut out of and into other shapes using clips and masks
- You can draw holes into single shapes using the special `evenodd` fill rule
- For images with a lot of duplicate objects, you can define an object once and reference it other places in the image
- You can design custom filters to create all sorts of interesting visual effects
- Presentation attributes can be animated with CSS keyframes to make cool animations
- Various external sources can be embedded into SVGs, including raster images, HTML elements, and even other SVGs
- You can control how your SVG should be stretched to fit its destination container, and whether it should overflow outside its boundaries

{% include figure.html src="9-conclusion/beyond-1.svg" caption="Fill pattern" %}

{% include figure.html src="9-conclusion/beyond-2.svg" caption="Mask" %}

{% include figure.html src="9-conclusion/greene-lab-animated.svg" caption="Animation" %}


#### Summary

SVG is a giant and complex specification.
What has been covered in this presentation is hopefully 90% of what you will ever need, but is still only the tip of the iceberg in terms of the amount of features and concepts that SVG has.

When you Google for help, or when you open a software-generated SVG, you will likely see many things you don't know.
This is okay and normal, even for people who have worked with SVG a lot.

You'll run into thing that are legacy: old features that have been deprecated but are still included to support really old software.
Always check to see if it's something you really need.

And you'll run into things that are cutting edge: proposed additions to the specification that are very new and not widely supported yet.
Always test your images on multiple devices/browsers/platforms to make sure they work reliably.
