---
---

### Text



#### Text element

Unfortunately, text is one of the most painful things to deal with in SVG.
It will display inconsistently on different platforms and software, especially with regard to alignment.
To guarantee it will always look as expected, convert text to raw shapes using SVG software (eg Inkscape's "Object to path" functionality).

For posterity, it is a good idea to either leave in the original `<text>` element commented out, or just make a comment noting the font/size/style you used to generate the text.

```xml
<text
  x="..."
  y="..."
>
  Text
</text>
```
{:.col}

{% include code-image.html src="5-text/text.svg" %}

Text is written by specifying an `x`,`y` coordinate on a `<text>` element, and enclosing the actual text to be displayed within the element.



#### Styling

There are many properties available for styling text, but here are the most useful/common ones.

```xml
<text
  font-family="Montserrat"
  font-size="16"
  font-weight="bold"
  font-style="italic"
  text-decoration="underline"
  letter-spacing="5"
>
  SPOOKY
</text>
```
{:.col}

{% include code-image.html src="5-text/text-style.svg" %}

If the specified font family isn't installed, a system default will be used. 
Special note: it is possible to specify an order of fallback fonts, including a generic type (eg serif, sans-serif, monospace).
You most likely won't need to use this, but keep it in mind.

The `font-weight` attribute can be set to `normal` (default), `bold`, `bolder`, `lighter`, or a multiple of 100 between 100 and 1000 (400 is normal, 700 is bold).



#### Horizontal alignment

The `text-anchor` attribute determines how the text is aligned horizontally.
The default is `start`.

```xml
<text
  text-anchor="start"
  text-anchor="middle"
  text-anchor="end"
>
```
{:.col}

{% include code-image.html src="5-text/text-anchor.svg" %}



#### Vertical alignment

The `dominant-baseline` attribute determines how the text is aligned vertically.
The default is `baseline`.

```xml
<text
  dominant-baseline="baseline"
  dominant-baseline="middle"
  dominant-baseline="hanging"
>
```
{:.col}

{% include code-image.html src="5-text/text-baseline.svg" %}

Don't confuse this with the `alignment-baseline` attribute, which is similar but not quite the same.



#### The `<tspan>` element

```xml
<text>
  grumpy
  <tspan fill="#e91e63">
    cat
  </tspan>
</text>
```
{:.col}

{% include code-image.html src="5-text/tspan.svg" %}

`<tspan>` elements can be placed inside `<text>` elements to style individual words/strings without breaking the normal flow of text.



#### `<tspan>` offset

```xml
<text
  baseline-shift="super"
  baseline-shift="sub"

  dx="..."
  dy="..."
>
```
{:.col}

{% include code-image.html src="5-text/tspan-offset.svg" %}

`<tspan>` elements can be positioned normally with `x` and `y`, but can also be positioned relative to the preceding text using the `dx` and `dy` attributes.
Note that using these attributes offsets all of the following text as well as the element it is applied to.
You can think of it as moving a typing cursor; once you move it, the next text that comes in will start at that position.

The `baseline-shift` attribute can be used to quickly create a superscript or subscript without affecting the text after it.

`em` can be used as a font size unit to specify a size relative to the current font size.
For example, you may want to set `font-size="0.75em"` on a superscript element to make it 75% the size of the normal text.

Unfortunately, there is no reliable way to auto-wrap text in SVG.
You will have to manually break text at the desired places and position lines beneath one another.



#### Whitespace

As we mentioned before, SVG (and most of the related web standards) are whitespace-insensitive.
Multiple consecutive whitespace characters are collapsed down to one.
This can unfortunately cause tricky problems with text spacing in SVGs.

```xml
grumpy<tspan>cat</tspan>

grumpy
<tspan>
  cat
</tspan>
```
{:.col}

{% include code-image.html src="5-text/text-whitespace.svg" %}

Keep this quirk in mind when writing text in SVG.
If you are having alignment/spacing problems, check your whitespace.

Whitespace can be forced by using Unicode characters in your text content (eg `&#160` for a single space).

#### EXERCISE 3

{% include figure.html src="exercises/exercise-3.svg" class="large_img" caption="" %}

Recreate this SVG on your own using the techniques covered so far.
The exact colors, lengths, and dimensions are not important; just try to capture the basic picture.
Use the SVGs in the `exercise-hints` folder as a starting point if you get stuck.