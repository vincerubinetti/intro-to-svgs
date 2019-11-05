---
---

### Special Concepts



#### Classes and id's

The `id` and `class` attributes can be used to name/label elements so you can refer to them elsewhere in the document.
There is a wide range of valid syntaxes for these names, but it is convention to only use letters, numbers, underscores, or dashes.
Notably, the names cannot start with a number.

```xml
<element id="unique_thing" />

<element class="generic_type" />
<element class="generic_type" />
<element class="generic_type another_type" />
```

An `id` is meant to reference a specific instance of an object; an object that is unique, and only appears once in the document.

A `class` is meant to reference a type of object that there are multiple instances of throughout the document.
You can also apply several classes to a single object by separating the class names by space.

You will see SVG editing software output a lot of generated ids and classes.
They normally not very descriptive or useful, and can often be removed.



#### CSS and the `<style>` tag

Recall that SVG is defined by the same people who define web standards such as HTML and CSS.
As such, there is a lot of crossover and overlap between the standards, making it very confusing for people trying to learn them.

```html
<style>
  element {
    attribute: value;
  }
  #id_name {
  }
  .class_name {
  }
</style>
```

Adding a `<style>` element to an SVG allows you to apply CSS styles to certain elements in the image.
A CSS style, for the purpose of an SVG, is an alternative way to set an attribute.
Many of the attributes that have been covered in this presentation so far can also be applied as a CSS style, with a slightly different syntax, as illustrated above.
The benefit of this approach is that you can apply properties to multiple elements in just one spot.

The special characters that precede the names are known as "CSS selectors".
There are many more advanced selectors, but you will likely only ever use the id `#` and class `.` selectors.
Without a preceding character, you are referring to the type of element itself; ie the "tag name".
For example, `text { fill: red }` would apply a red fill to all `<text>` elements in the document, whether they have ids/classes or not.

Note that the `<style>` element itself is not visible; it is a definition element.
There are several other types of definition elements like this as well.



#### Valid `<style>` attributes, and exceptions

The attributes that can be applied with styles are referred to as "presentation attributes".
In general, they are the properties that describe the "style" of elements, but not their geometry.
The attributes covered in this presentation that can be applied with styles are:

`fill` `stroke` `opacity` `stroke-width` `stroke-linecap` `stroke-linejoin` `stroke-dasharray` `stroke-dashoffset` `font-family` `font-size` `font-weight` `font-style` `text-decoration` `letter-spacing` `text-anchor` `dominant-baseline` `baseline-shift` `transform`

```html
<style>
  #some_element {
    fill: red;
    stroke: blue;
    stroke-width: 10;

    ...

    transform: translate(10px,5px) rotate(45deg) skewX(10deg);
    font-size: 12pt;
    letter-spacing: 2px;
  }
</style>
```

Note some small differences: the transform attribute requires specifying units, and requires a comma between function parameters (a space is not valid).
The font-size and letter-spacing attributes also require units.
In general, if something is not working, check to see if the CSS version of the attribute requires a different syntax than the SVG version.

CSS also has significantly more transform functions than SVG, like `perspective` and `rotate3d`.
But use these in SVG with extreme caution; they are not likely to be supported in many programs.



#### Inline styles

To add more confusion, CSS styles can also be defined "inline", right on the element, in a style attribute.
This makes 3 ways you can specify the appearance of objects:

1) Attributes on the object
2) CSS styles in <style> tag
3) Inline CSS styles

```html
<element attribute="value" />

<style>
  #some_element {
    attribute: value;
  }
</style>

<element style="attribute: value; attribute: value; attribute: value" />
```

For most purposes, these will all yield the same result.
The main difference is that they have different priorities when there are overlapping/conflicting properties for a particular element.

There is no consensus about which of these to use and when.
SVG editing software will often generate inline CSS styles, perhaps because they have the highest/final priority.



#### `<style>` example

Here is an example of using a combination of CSS selectors: tag name, id name, and class name.

```html
<style>
  text { font-family: Pacifico; }
  #company { font-size: 20pt; }
  .blue { fill: blue; }
  .dot { opacity: 0.5; }
</style>

<text id="company" class="blue">
  Twiddr
</text>
<circle class="blue dot" />
<circle class="blue dot" />
<circle class="blue dot" />
```
{:.col}

{% include code-image.html src="8-special-concepts/style.svg" %}

Special trick: If you want to use an online font but don't want to install it on your system, you can dynamically import the font from a url like this:

```html
<style>
  @import url('https://fonts.googleapis.com/css?family=Pacifico');

  #some_element {
    font-family: Pacifico
  }
</style>
```

This requires an internet connection, though, and should be used cautiously.



#### Gradients

The `<defs>` tag, like the `<style>` tag, is used to define special things that aren't shown in the image but can be referenced elsewhere in the document.
Gradients are one such thing.

```xml
<defs>
  <linearGradient
    id="rainbow"
    x1="0%"
    y1="100%"
    x2="100%"
    y2="0%"
  >
    <stop
      offset="0%"
      stop-color="red"
    />
    ...
    <stop
      offset="50%"
      stop-color="blue"
    />
    ...
    <stop
      offset="100%"
      stop-color="orange"
    />
  </linearGradient>
</defs>

<rect fill="url('#rainbow')" />
```
{:.col}

{% include code-image.html src="8-special-concepts/gradient.svg" %}

Gradients can be used as fills or strokes instead of a solid color.
There are two kinds of gradients you can specify: `<linearGradient>` and `<radialGradient>` (unfortunately there is no angular gradient).
You can specify the start and stop position of the gradient in terms of % (relative to the dimensions of whatever object it is applied to).
You can add any color "stops" that you need, specifying their % through the gradient, their color, and their opacity if needed.
There are several other parameters available to tweak the appearance, but these are the most commonly needed.

To apply a gradient to an object, first give the gradient an id, then set the fill or stroke of your object to `url('#the_id')`.



#### Markers

Markers are another thing that go in the `<defs>` tag.

Markers are a way to define arrow heads or point markers on the stroke of lines, polylines, polygons, or paths.
They can be any shape you want, and can be placed at the start of a stroke, the end of a stroke, and at the mid-points (where separate segments join) of a stroke: `marker-start`, `marker-end`, and `marker-mid`, respectively.

```xml
<defs>
  <marker
    id="arrow"
    orient="auto-start-reverse"
  >
    ...
  </marker>
  <marker id="dot" orient="auto">
    ...
  </marker>
</defs>

<path
  marker-start="url('#arrow')"
  marker-mid="url('#dot')"
  marker-end="url('#arrow')"
/>
```
{:.col}

{% include code-image.html src="8-special-concepts/marker-1.svg" %}

The way markers are defined are essentially as their own mini-SVG within the main SVG.
You specify a `viewBox` attribute for the marker shape, as well as a width and height.
The `viewBox` determines the visible area and coordinate space, and the width/height determine the resulting size that the area is scaled to.

```xml
<defs>
  <marker
    id="arrowhead"
    viewBox="0 0 10 8"
    refX="5"
    refY="4"
    markerWidth="5"
    markerHeight="4"
    orient="auto-start-reverse"
  >
    <polygon points="... shape ..." />
  </marker>
</defs>
```
{:.col}

{% include code-image.html src="8-special-concepts/marker-2.svg" %}

One difference, though, is that `markerWidth` and `markerHeight`, by default, are multiplied by the `stroke-width` of the stroke that the marker is attached to.
For example, if they are set to 5, and the stroke using the marker has a thickness of 3, the resulting size (in SVG units) of the marker will be 15x15.
You can make a marker an absolute/constant size by changing the `markerUnits` attribute.

You also must specify a reference point `refX`, `refY`, which is the point in the marker's `viewBox` that gets pinned to the segment start/end point.

By default, markers will not rotate.
To automatically rotate markers with the stroke, set the `orient` attribute to `auto`.
This aligns the positive x axis of the marker `viewBox` to the angle of the stroke at the point where the marker is attached.
`auto-start-reverse` will rotate the marker like `auto`, except the marker at the start of the stroke will be rotated an extra 180 degrees.
This is likely what you will want most of the time.

Unfortunately, the fill and stroke color of a marker shape itself cannot be made to automatically match the color of the stroke it is attached to; they must be set manually.
This may change in future versions of SVG.



#### EXERCISE 6

{% include figure.html src="exercises/exercise-6.svg" class="large_img" caption="" %}

Recreate this SVG on your own using the techniques covered so far.
The exact colors, lengths, and dimensions are not important; just try to capture the basic picture.
Use the SVGs in the `exercise-hints` folder as a starting point if you get stuck.