---
title: Slide Gaps
description: Learn how Embla Carousel handles slide gaps and how to customize them.
order: 1
date: 2021-03-13
---

# Slide Gaps

> **Note!** If you haven't installed Embla Carousel yet, please visit the [installation](/get-started/#choose-installation-type) instructions before you continue with this guide.

Embla Carousel allows you to use **any CSS to align your slides** in the chosen scroll [axis](/api/options/#axis), whether it's CSS Grid, flexbox, inline-blocks or anything else. It will conveniently **pick up any spacings** between the slides and **automatically adjust the scroll snaps** accordingly.

### Declaring gaps

It's recommended to declare gaps between slides **using CSS**. Any CSS that will render space between the slides is valid. You may add spacing in one direction like so:

```css
.embla__slide {
  margin-right: 20px;
}
```

It's also valid to add gaps in both directions:

```css
.embla__slide {
  margin-right: 20px;
  margin-left: 10px;
}
```

If you're using CSS Grid you can declare your gaps like so:

```css
.embla__container {
  grid-column-gap: 20px;
}
```

> **Note!** If you don't have loop enabled, Embla Carousel will ignore any gaps at the start and end edge of the carousel.

### Variable gaps

Just like [variable slide sizes](/guides/slide-sizes/#variable-sizes), variable gap sizes is **supported out of the box**. Declare your gap sizes in your CSS to achieve this:

```css
.embla__slide:nth-child(1) {
  margin-right: 10px;
}
.embla__slide:nth-child(2) {
  margin-right: 20px;
  margin-left: 10px;
}
```

### Responding to breakpoints

If you've not turned off the [autoResize](/api/options/#autoresize) option, Embla Carousel will **automatically pick up any changes in gap sizes** when the **window is resized**. It's very simple to set different sizes based on your breakpoints:

```css
.embla__slide {
  margin-right: 10px; /* Default slide gap */
}
@media (min-width: 768px) {
  .embla__slide {
    margin-right: 20px; /* Breakpoint SM gap */
  }
}
```