---
---

### Groups and Transforms



#### The `<g>` element

Elements can be grouped together and then treated and operated on as a whole, just like in any software that has grouping.
Placing elements inside a `<g>` element groups them together.
Groups can be nested within each other, allowing a complex hierarchy of visual components.

```xml
<g fill="skyblue" stroke="blue">
  <rect />
  <polygon />
  <circle />
</g>
```
{:.col}

{% include code-image.html src="7-groups-transforms/group.svg" %}

Style attributes like `fill` and `stroke` can be set once, on the group element, and automatically cascade down to all of its children elements.
Transformations can be applied to a group to affect all of the children as if they were a single cohesive element.

SVG editing software usually uses groups as a way to make layers that can be conveniently toggled on/off.
Groups may also be used as just a way to divide the document into more readable/manageable sections.



#### Group opacity

When the opacity attribute is applied to a group, all of its children are drawn as normal before the opacity is applied.
If you draw several overlapping shapes with solid/opaque fills and put them in a group with an opacity, they will become translucent together as a single shape, rather than being individually translucent.

```xml
<rect opacity="0.5" />
<circle opacity="0.5" />

<g opacity="0.5">
  <rect /><circle />
</g>
```
{:.col}

{% include code-image.html src="7-groups-transforms/group-opacity.svg" %}

This is a useful trick when the shape you need is drawn more easily with basic shapes than with a multi-part `<path>` element, and you need it to be transparent.



#### The `transform` attribute

The `transform` attribute can be applied to an element to translate, scale, rotate, or skew it.
The transformations are applied at (or near) the end of the rendering process, meaning that they will transform the element "as is".
That is, all strokes, fill patterns, child shapes, etc will be warped.

```xml
<element
  transform="last() middle() first()"
/>
```
{:.col}

{% include code-image.html src="7-groups-transforms/transform.svg" %}

The attribute takes a series of functions that are **applied right to left**.
Multiple functions of the same type can be specified, and in any order.
Arguments can be separated by space or comma.



#### Translate

The `translate` function takes `dx` and `dy` distances (specified the same way as any other unit) to move the object by in the x and y axes.

```xml
translate(dx,dy)
```
{:.col}

{% include code-image.html src="7-groups-transforms/transform-translate.svg" %}



#### Scale

The `scale` function takes `sx` and `sy` factors to scale the object by in the x and y axes.
`1` is original size, `0.5` is half size, `2` is double size, etc.

```xml
scale(sx,sy)
```
{:.col}

{% include code-image.html src="7-groups-transforms/transform-scale.svg" %}

If `sy` is not provided, it is assumed to be the same as the provided `sx`; ie, a aspect-ratio-preserving scale.



#### Rotate

The `rotate` function takes an `angle` to rotate the object by (clockwise, from the positive x axis).
The function also takes an optional `x` and `y` rotation pivot point, which is assumed to be the origin if not provided.

```xml
rotate(angle,x,y)
```
{:.col}

{% include code-image.html src="7-groups-transforms/transform-rotate.svg" %}



#### Skew

The `skewX` and `skewY` functions take an `angle` to horizontally and vertically (respectively) skew the image by.
Skewing can be thought of as slicing the image (horizontally with skewX or vertically with skewY) and splaying those slices out like a deck of cards.

```xml
skewX(angle)
skewY(angle)
```
{:.col}

{% include code-image.html src="7-groups-transforms/transform-skew.svg" %}

The `x` skew can also be visualized as rotating the vertical axis (counter-clockwise) by an angle, and the `y` skew as rotating the horizontal axis (clockwise).



#### Transform origin

By default, transform operations are done **relative to the origin of the SVG**.
If you wish to transform an element around its center, you unfortunately must go through a tedious process: first translate the object such that its center is at 0,0, apply your rotation/scale/skew, then translate it back to its original position.

There is a `transform-origin` attribute that can change which absolute point the element is transformed around, but unfortunately it is not reliable on all devices and softwares.
Also, it only allows you to set the transform origin relative to the `viewBox` (eg, center of the view), not around the center of a particular element.

{% include figure.html src="7-groups-transforms/transform-origin.svg" caption="A shape drawn around the origin" %}

As such, sometimes it's a good idea to simply draw shapes around the origin from the start, then translate them to the desired location.
This also often makes the coordinates more symmetric, making them easier to read and change later.



#### EXERCISE 5

{% include figure.html src="exercises/exercise-5.svg" class="large_img" caption="" %}

Recreate this SVG on your own using the techniques covered so far.
The exact colors, lengths, and dimensions are not important; just try to capture the basic picture.
Use the SVGs in the `exercise-hints` folder as a starting point if you get stuck.