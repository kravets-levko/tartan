# Syntax

## Basic syntax

### Threadcount

The threadcount indicates the color stripes of the warp 
and weft in sequence and the number of threads in each 
stripe.
 
The threadcount is usually provided as a series of 
capital letters and numbers. Each capital letter 
represents a color in the tartan and the number 
beside each letter dictates the precise number of 
threads required so that the weaver can set up 
the loom accurately. For example
``` 
B24 W4 B24 R2 K24 G24 W2
``` 
Means 24 threads of B (blue) followed by 4 threads of 
W (white), 24 threads of B (blue), 2 threads of 
R (red), 24 threads of K (black), 24 threads of 
G (green), and another 2 threads of W (white).
 
Tartans are either symmetrical/reflective patterns 
or asymmetrical/repeating patterns. The threadcounts 
for these two types of patterns are presented slightly 
differently so that the weaver knows which type of 
pattern he is setting up on his loom.

### Symmetrical/reflective setts
Symmetrical or reflective patterns are so called 
because the complete sett or pattern contains 
lines of symmetry or reflection at the pivot points.

The pivot points are located at the lines of 
reflection in the pattern. At each pivot point 
the pattern is reflected, as in a mirror image.

The 'first' pivot is usually the color which appears 
earliest in the alphabet. Where there are, for example, 
blue and white pivot points, the blue is taken as the 
first pivot and the white as the second pivot.

Because the pattern reflects, only half the threadcount 
needs to be provided - the user will know that the 
second half of the threadcount is a mirror reflection 
of the first half.

To show that the threadcount is for a symmetrical/reflective 
tartan, the pivot points include a slash (/) between 
the letter and number of threads. For example 
`B/24 W4 B24 R2 K24 G24 W/2`.

### Asymmetrical/repeating setts
Where the pattern does not reflect it is known as 
an asymmetrical or repeating pattern. There are 
no pivot points in an asymmetrical pattern: 
when reaching the end of the pattern it repeats 
from the beginning again.

### Color codes
The capital letters used in a threadcount are color 
codes which describe specific shades of color.

### Different warp and weft threadcounts
For most tartans the warp and weft are virtually 
identical and only one threadcount is required. 
Occasionally however a tartan has significant 
differences between the warp and weft 
(which creates a pattern of rectangles rather than 
squares). If your tartan has different threadcounts for 
the warp and weft then you will need to describe both 
threadcounts.

## Extended syntax

Additionally to basic threadcount syntax, this library 
allows to use some extended markup that should make 
a tartan development process simpler. Anyway, 
all basic syntax is supported.

### Color codes

This extension allows to define colors directly within 
threadcount description. Syntax: `<latin letter><html color definition>`.
`<html color definition>` should start with `#` character 
followed by three or six hexadecimal letters. Examples: `R#f00`, `T#603311`.

### Reflections

This extension allows to highlight blocks that should be 
reflected (like with pivots markup described above). But 
while basic syntax allows only to reflect entire threadcount, 
square braces can define as much reflective blocks as you wish. 
For example: `B/24 W4 B24 R2 G24 K24 W2 K24 G/24` can be 
changed to `[B24 W4 B24 R2 G24 K24 W2 K24 G24]` and another way to 
describe it: `[[B24 W4] R2 [G24 K24 W2]]` - `[B24 W24]` will be 
expanded to `[B24 W24 B24]` and `[G24 K24 W2]` will be expanded to 
`G24 K24 W2 K24 G24`.

## References

- [Scottish Tartans Authority](https://www.tartanregister.gov.uk/threadcount.aspx), The only organisation dedicated to promoting tartan - registered charity.
- [The Scottish Register of Tartans](http://www.tartanregister.gov.uk/), Scotland's official tartan register.
