# PostCSS Prepend Selector [![Build Status][ci-img]][ci]

[PostCSS] plugin Prepend selector for each rule.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/ledniy/postcss-prepend-selector.svg
[ci]:      https://travis-ci.org/ledniy/postcss-prepend-selector

```css
.foo {
    /* Input example */
}

.foo, .bar {
    /* Input example */
}
```

```css
.selector .foo {
  /* Output example */
}

.selector .foo, .selector .bar {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-prepend-selector')( { selector: '.selector ' } ) ])
```

See [PostCSS] docs for examples for your environment

Forked from [ledniy/postcss-prepend-selector]

[ledniy/postcss-prepend-selector]: https://github.com/ledniy/postcss-prepend-selector
