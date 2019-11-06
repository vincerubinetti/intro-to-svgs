---
---

### Basic Shapes



#### Rectangle

```xml
<rect
  x="..."
  y="..."
  width="..."
  height="..."
/>
```
{:.col}

{% include code-image.html src="3-basic-shapes/rectangle.svg" %}

A rectangle is written in the same way as the `viewBox` attribute: by specifying the `x`,`y` coordinate of the upper left corner of the box and the `width`/`height` of the box.



#### Rounded rectangle

```xml
<rect
  x="..."
  y="..."
  width="..."
  height="..."
  rx="..."
  ry="..."
/>
```
{:.col}

{% include code-image.html src="3-basic-shapes/rounded-rectangle.svg" %}

A rounded rectangle is written the same way as a regular rectangle, but with the added `rx` and `ry` attributes that specify the corner radius.
The `width` and `height` attributes still refer to the full outer width and height of the shape.



#### Circle

```xml
<circle
  cx="..."
  cy="..."
  r="..."
/>
```
{:.col}

{% include code-image.html src="3-basic-shapes/circle.svg" %}

A circle is written by specifying the `x`,`y` coordinate of the circle center, and its radius (`r`).



#### Ellipse

```xml
<ellipse
  cx="..."
  cy="..."
  ry="..."
  rx="..."
/>
```
{:.col}

{% include code-image.html src="3-basic-shapes/ellipse.svg" %}

An ellipse is written the same way as a circle, but with separate `rx` and `ry` attributes for the x and y radii.



#### Line

```xml
<line
  x1="..."
  y1="..."
  x2="..."
  y2="..."
/>
```
{:.col}

{% include code-image.html src="3-basic-shapes/line.svg" %}

A line is written by specifying start and end `x`,`y` coordinates.



#### Polygon / polyline

```xml
<polygon/polyline
  points="... x y x y ..."
/>
```
{:.col}

{% include code-image.html src="3-basic-shapes/polygon.svg" %}

A `<polygon>` element is intended for closed shapes, where the last point is automatically connected to the first.
A `<polyline>` element is intended for multi-segment lines (open shapes), and is not automatically closed.

The `points` attribute is written as a series of `x`,`y` coordinates, separated by space or comma.

Note that if a fill is specified for an open shape, it will still be filled and essentially look as if it has been closed, except the last stroke segment will be missing.



#### EXERCISE 1 
{:.break_before}

{% include figure.html src="exercises/exercise-1.svg" class="large_img" caption="" %}

Recreate this SVG on your own using the techniques covered so far.
The exact colors, lengths, and dimensions are not important; just try to capture the basic picture.
Use the SVGs in the `exercise-hints` folder as a starting point if you get stuck.