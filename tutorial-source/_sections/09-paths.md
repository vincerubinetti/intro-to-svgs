---
---

### Paths



#### The `<path>` element


`<path>` elements can be used to create arbitrary shapes that behave like any of the standard shapes (with regard to fill, stroke, opacity, etc).
The geometry of a path is specified in its `d` (data/description/definition) attribute.

```xml
<path
  d="..."
  fill="..."
  stroke="..."
/>
```
{:.col}

{% include code-image.html src="6-paths/path.svg" %}



#### The `d` attribute

The `d` attribute takes a **sequence of draw commands**.
You can think of these commands as moving a paint brush around a canvas.
Commands go _from_ the current point -- wherever the "brush" ended up from the preceding commands -- _to_ the specified point.

Each command is a single letter, and can be followed by numerical values to specify where and how to draw the command.

```xml
M 50 50 L 100 100 C 75 100, 50 75, 50 50

M 50,50 L 100,100 C 75,100 50,75 50,50

M 50 50
L 100 100
C 75 100 50 75 50 50
```

The syntax of these commands is similar to that of the points attribute for polygons and polylines.
Values can be separated by spaces or commas.
Letters next to numerical values do not need to be separated at all, because they can be differentiated by the parser just by their type (whereas "10,10" can't be condensed to "1010" without looking like one thousand and ten).
Line breaks are also permitted.

There are many different ways to format path strings.
However, for best clarity, this author recommends separating commands by line, and separating command values by space



#### Move to

The `M` command moves the brush to the specified point without drawing anything between.

```xml
M x y
```
{:.col}

{% include code-image.html src="6-paths/path-m.svg" %}

You will always start a path by specifying a "move to" point, so the brush has somewhere to start.



#### Line to

The `L` command draws a straight line from the previous point to the specified point.

The `H` and `V` commands draw horizontal and vertical lines, respectively, from the previous point to the specified x or y coordinate.

```xml
L x y

H x
V y
```
{:.col}

{% include code-image.html src="6-paths/path-l.svg" %}



#### Close

The `Z` command closes the current shape, drawing a line back to the first point.

```xml
M 25 25
L 45 45
M 55 55
L 75 75
L 45 80
Z
```
{:.col}

{% include code-image.html src="6-paths/path-z.svg" %}

Because of the "move to" command, it is possible to draw multiple shapes in the same path element, called "subpaths".
The `Z` command closes the current subpath.



#### Arc to

The `A` command draws an elliptical arc from the current point to the specified point.

```xml
A rx ry angle large cw x y

A 50 50 0 0 1 65 75
```
{:.col}

{% include code-image.html src="6-paths/path-a-1.svg" %}

You might expect that arcs would work by specifying the center point and start and end angles.
Instead, it works from start point to end point, and you choose 1 of 4 possible arcs between them.
This unfortunately means that if the start/end angles you want to draw aren't multiples of 90 degrees, you'll have to do some trigonometry to calculate coordinates, and you'll end up with a lot of non-whole numbers.

The final `x`,`y` inputs are the end point coordinate.

{% include figure.html src="6-paths/path-a-2.svg" caption="Arc angle" %}

The `rx` and `ry` inputs specify the x and y radii of the ellipse that forms the arc.

The angle input determines the _direction the `rx` and `ry` radii_.
**It does not change the start/end points of the arc**.
The angle specifies the clockwise degrees between the global positive x axis and the positive x axis of the ellipse.

If `rx` and `ry` are the same, the angle will have no visible effect, because a perfect circle looks the same when rotated.

{% include figure.html src="6-paths/path-a-3.svg" caption="Arc flags" %}

Given a certain radius, there are 4 possible arcs that can be drawn between two points. 
The `large` and `cw` (often called the "large arc" and "sweep" flags) inputs allow you to specify which of the 4 possible arcs should be used.
These inputs should be set to 0 (for false) or 1 (for true).

When `large` is set to `1`, the outer/larger arc is used (shown as dotted lines above).
When `large` is set to `0`, the inner/smaller arc is used (shown as solid lines above).

When `cw` is set to `1`, the clockwise arc is used (shown as blue above).
When `cw` is set to `0`, the counter-clockwise arc used (shown as red above).
Imagine driving a car on the arc from the start point to the end point.
If you have turn right the whole time, the `cw` flag is `1`.
If you have to turn left the whole time, the `cw` flag is `0`.

If the radii you've specified aren't large enough to create an arc to the specified point, they are increased (maintaining proportions) until they are.









[Paths reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)  
[Interactive demonstration of the arc command](https://codepen.io/lingtalfi/pen/yaLWJG)
