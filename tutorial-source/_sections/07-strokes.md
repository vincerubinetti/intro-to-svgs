---
---

### Strokes



#### Width

The `stroke-width` attribute specifies the thickness of the stroke around an element.
Note that the stroke is always applied "on center" with the outline of the element.
Half of the stroke width will be applied on one side of the outline, and the other half on the other side.
The outline (center of the stroke) is exactly where you specify it in the geometry of your shape.

```xml
<element
  stroke-width="..."
/>
```
{:.col}

{% include code-image.html src="4-strokes/stroke-width.svg" %}

Unfortunately, there is no reliable, standard way to set the stroke to be on the inside or the outside of the outline.
You will either have to adjust your geometry points to account for the thickness you want, or use a program like Inkscape or Illustrator to help you achieve the desired effect more conveniently.



#### Line cap

The stroke-linecap attribute specifies how the strokes of unclosed shapes look at their ends.

```xml
<element
  stroke-linecap="butt"
  stroke-linecap="square"
  stroke-linecap="round"
/>
```
{:.col}

{% include code-image.html src="4-strokes/stroke-linecap.svg" %}

`Butt` is the default; it specifies that the stroke ends flush with the end of the outline.
`Square` specifies that that stroke extends beyond the end of the outline a distance of half the stroke thickness, creating the appearance of a square centered on the end point.
`Round` is the same as `square`, except the the stroke is rounded creating the appearance of a circle centered on the end point.



#### Line join

The stroke-linejoin attribute specifies how consecutive segments of a stroke are joined.

```xml
<element
  stroke-linejoin="miter"
  stroke-linejoin="bevel"
  stroke-linejoin="round"
/>
```
{:.col}

{% include code-image.html src="4-strokes/stroke-linejoin.svg" %}

`Miter` is the default; it extends the edges of the stroke until they intersect, and fills the enclosed area.
`Bevel` treats the segments as if they were `butt` caps, and fills the resulting gap between them.
`Round` treats the segments as if they were `round` caps.

The stroke-miterlimit attribute can be used to make a `miter` join by default, but make a `bevel` join where the joint angle is too sharp (to avoid a long point jutting out).



#### Dashed lines

The `stroke-dasharray` attribute allows you to create custom dash patterns for strokes.
The attribute is specified as a series of alternating dash and gap lengths, starting with the first dash length.

```xml
<element
  stroke-dasharray="d g d g ..."

  stroke-dasharray="10"
  stroke-dasharray="20 10"
  stroke-dasharray="20 10 5 10"
/>
```
{:.col}

{% include code-image.html src="4-strokes/stroke-dasharray-1.svg" %}

If you only provide one value, the dash and gap values will be the same.
In reality, when an odd number of values is provided, the sequence is duplicated once to yield an even number; but this results in unintuitive behavior, and is not recommended for best clarity.

Note: The units of the dash and gap lengths are the same as any other unit in SVG.
They are absolute distances, not percentages or any other relative measurement.



#### Dotted lines

```xml
<element
  stroke-dasharray="0 15"
  stroke-dasharray="0 15 10 15"
  stroke-dasharray="0 15 10 15"
/>
```
{:.col}

{% include code-image.html src="4-strokes/stroke-dasharray-2.svg" %}

By setting `stroke-linecap` to `round` or `square` and using 0-length dashes, you can create dotted lines.



#### Dash offset

```xml
<element
  stroke-dashoffset="0"
  stroke-dashoffset="-5"
  stroke-dashoffset="-10"
/>
```
{:.col}

{% include code-image.html src="4-strokes/stroke-dasharray-3.svg" %}

By default, the dash pattern begins at the starting point of the stroke.
The `stroke-dashoffset` attribute shifts the dash pattern toward the end point (negative) or toward the start point (positive).



#### EXERCISE 2

{% include figure.html src="exercises/exercise-2.svg" class="large_img" caption="" %}

Recreate this SVG on your own using the techniques covered so far.
The exact colors, lengths, and dimensions are not important; just try to capture the basic picture.
Use the SVGs in the `exercise-hints` folder as a starting point if you get stuck.