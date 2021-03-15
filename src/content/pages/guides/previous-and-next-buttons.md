---
title: Prev & Next
description: Learn how to utilize the Embla Carousel API to setup previous and next buttons.
order: 2
date: 2021-03-15
---

# Previous & Next Buttons

> **Note!** If you haven't installed Embla Carousel yet, please visit the [installation](/get-started/#choose-installation-type) instructions before you continue with this guide.

This guide will show you **how** to **add previous and next buttons** using the Embla Carousel [API](/api/). We're going to make use of the following API methods to achieve this:

- [scrollPrev](/api/methods/#scrollprev)
- [scrollNext](/api/methods/#scrollnext)

### Button placement

Assuming your carousel is [draggable](/api/options/#draggable), it's important to note that the **root element** that is passed to the `EmblaCarousel` initializer with the class name `embla` in this example, will **respond to pointer events**:

```html
<div class="embla">
  <div class="embla__container">
    <div class="embla__slide">Slide 1</div>
    <div class="embla__slide">Slide 2</div>
    <div class="embla__slide">Slide 3</div>
  </div>
</div>
```

```js
const emblaNode = document.querySelector('.embla') // Root element
const embla = EmblaCarousel(emblaNode)
```

Therefore, it's **not a good idea** to place the previous and next buttons inside the root element, because a click on any of the buttons may trigger **unintended drag interactions** on the carousel.

To solve this, we're going to modify the minimal [HTML setup](/get-started/module/#the-html-structure) from the installation guide by creating a **viewport wrapper** around our container like so:

```html{2, 8}
<div class="embla">
  <div class="embla__viewport">
    <div class="embla__container">
      <div class="embla__slide">Slide 1</div>
      <div class="embla__slide">Slide 2</div>
      <div class="embla__slide">Slide 3</div>
    </div>
  </div>
</div>
```

Our new wrapper with the class name `embla__viewport` will act as our **new root element**, which will encapsulate the scroll container and respond to pointer events. Now, we're ready to place our buttons **outside** that wrapper:

```html{9-10}
<div class="embla">
  <div class="embla__viewport">
    <div class="embla__container">
      <div class="embla__slide">Slide 1</div>
      <div class="embla__slide">Slide 2</div>
      <div class="embla__slide">Slide 3</div>
    </div>
  </div>
  <button class="embla__button embla__button--prev">Prev</button>
  <button class="embla__button embla__button--next">Next</button>
</div>
```

### Adding click events with vanilla JavaScript

Adding event listeners to our buttons is easy. It just requires som basic JavaScript to get this done. First, we need to **grab our wrappers and buttons**:

```js
import EmblaCarousel from 'embla-carousel'

// Grab wrapper nodes
const rootNode = document.querySelector('.embla')
const viewportNode = rootNode.querySelector('.embla__viewport')

// Grab button nodes
const prevButtonNode = rootNode.querySelector('.embla__button--prev')
const nextButtonNode = rootNode.querySelector('.embla__button--next')
```

Now that we have our nodes, let's initialize our carousel and make our previous and next **buttons respond to clicks**. We'll use [scrollPrev](/api/methods/#scrollprev) and [scrollNext](/api/methods/#scrollnext) for this:

```js
// Initialize the carousel
const embla = EmblaCarousel(viewportNode)

// Add click listeners
prevButtonNode.addEventListener('click', embla.scrollPrev, false)
nextButtonNode.addEventListener('click', embla.scrollNext, false)
```

### Adding click events with React

Modifying the minimal [component setup](/get-started/react/#the-component-structure) from the installation guide, we're going to use the `emblaApi` to create our `scrollPrev` and `scrollNext` functions:

```jsx
import React, { useCallback } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla">
      <div class="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">Slide 1</div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div>
        </div>
      </div>
      <button class="embla__button embla__button--prev" onClick={scrollPrev}>
        Prev
      </button>
      <button class="embla__button embla__button--next" onClick={scrollNext}>
        Next
      </button>
    </div>
  )
}

export default EmblaCarousel
```
