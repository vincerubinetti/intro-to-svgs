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



#### Curve to

The `C` command draws a curve with two control (handle) points from the current point to the specified point.
If you've ever tried to draw a curve in a program like Inkscape or Illustrator, you are probably familiar with the "handles" on each point.
The best way to understand how control points behave and form curves is to just play around with them in one of those programs.

```xml
C a b c d x y
```
{:.col}

{% include code-image.html src="6-paths/path-c.svg" %}

Tip: To connect two curved segments smoothly without any visible joint, make sure that the slopes/angles of the two connecting control point tangent lines are the same.

[Wikipedia article on Bezier Curves](https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Constructing_B%C3%A9zier_curves)  
[Interactive demonstration of Bezier curves](https://www.joshwcomeau.com/posts/dynamic-bezier-curves/)



#### Curve to shorthand

The `S` command is a quicker way to draw a series of bezier curves in succession.
The command essentially does the same thing as the `C` command, except that the `a b` control point is assumed to be a reflection of the `c d` control point of the previous curve.

```xml
S c d x y
```
{:.col}

{% include code-image.html src="6-paths/path-s.svg" %}

This command should only be used right after a `Q` command or another `S` command.

This is how curve pen tools in programs like Inkscape and Illustrator typically work, where you click and drag to define the first control point of the next curve and the second control point of the previous curve at the same time.



#### Quadratic to

The `Q` command draws a curve with one control (handle) point from the current point to the specified point.
You can think of it as a simplified version of the `C` command, where both control points are the same.

```xml
Q i j x y
```
{:.col}

{% include code-image.html src="6-paths/path-q.svg" %}



#### Quadratic to shorthand

The `T` command is a quicker way to draw a series of quadratic curves in succession.
The command essentially does the same thing as the `Q` command, except that the `i j` control point is assumed to be a reflection of the `i j` control point of the previous curve.

```xml
T x y
```
{:.col}

{% include code-image.html src="6-paths/path-t.svg" %}

This command should only be used right after a `Q` command or another `T` command.



#### Relative coordinates

Note that all of the previous commands were shown as capital letters.
If you provide a lowercase command letter, coordinates you give it are assumed to be relative to the previous coordinate, instead of relative to the origin of the image (absolute).

```xml
M 25 25
h 50
v 30
l -25 25
l -25 -25
z
```
{:.col}

{% include code-image.html src="6-paths/relative-coordinates.svg" %}

This can be very useful when you know the difference between each point better than their absolute positions in the overall image.
However, if you will want to tweak individual points without affecting all the following points, you should write your coordinates as absolute.



#### Quirks

If you provide more inputs than are needed for a command, the extra inputs overflow into a new command of the same type.
For example, if you write a "line to" command, and keep providing pairs of coordinates without a new command letter, it will simply be parsed as multiple consecutive line commands.

If you are trying to draw a circle in a path element, you unfortunately cannot draw it with only one arc command; you must split it up into multiple.
It's usually the clearest and simplest to just draw two semi-circles.

```xml
M 10 10
l 35 0
0 35
-35 0
z

M 70 50
a 20 20 0 0 1 0 40
a 20 20 0 0 1 0 -40
z
```
{:.col}

{% include code-image.html src="6-paths/quirks.svg" %}



#### EXERCISE 4

{% include figure.html src="exercises/exercise-4.svg" class="large_img" caption="" %}

Recreate this SVG on your own using the techniques covered so far.
The exact colors, lengths, and dimensions are not important; just try to capture the basic picture.
Use the SVGs in the `exercise-hints` folder as a starting point if you get stuck.