---
title: Methods
description: Explore Embla Carousel methods useful for extending the carousel beyond its native functionality.
order: 1
date: 2021-02-21
---

# Methods

Embla Carousel exposes a set of useful methods which makes it very extensible. Assuming you've stored the carousel instance in a variable, a method is called like demonstrated below.

```js
const embla = EmblaCarousel(emblaNode)
embla.scrollTo(4)
```

### containerNode

Parameters: `none`  
Returns: `HTMLElement`

Get the container node that holds the slides. This method can be useful when you need to manipulate the container element dynamically or similar.

### slideNodes

Parameters: `none`  
Returns: `HTMLElement[]`

Get all the slide nodes inside the container. This method can be useful when you need to manipulate the slide elements dynamically or similar.

### scrollNext

Parameters: `none`  
Returns: `void`

Scroll to the next snap point if possible. When [loop](/api/options/#loop) is disabled and the carousel has reached the last snap point, this method won't do anything.

### scrollPrev

Parameters: `none`  
Returns: `void`

Scroll to the previous snap point if possible. When [loop](/api/options/#loop) is disabled and the carousel has reached the first snap point, this method won't do anything.

### scrollTo

Parameters: `index: number`  
Returns: `void`

Scroll to a snap point by its unique index. If [loop](/api/options/#loop) is enabled, Embla Carousel will choose the closest way to the target snap point.

### canScrollNext

Parameters: `none`  
Returns: `boolean`

Check the possiblity to scroll to a next snap point. If [loop](/api/options/#loop) is enabled and the container holds any slides, this will always return true.

### canScrollPrev

Parameters: `none`  
Returns: `boolean`

Check the possiblity to scroll to a previous snap point. If [loop](/api/options/#loop) is enabled and the container holds any slides, this will always return true.

### selectedScrollSnap

Parameters: `none`  
Returns: `number`

Get the index of the selected snap point.

### previousScrollSnap

Parameters: `none`  
Returns: `number`

Get the index of the previously selected snap point.

### scrollSnapList

Parameters: `none`  
Returns: `number[]`

Get an array containing all the snap point positions. Each position represents how far the carousel needs to progress in order to reach this position.

### scrollProgress

Parameters: `none`  
Returns: `number`

Check how far the carousel has scrolled of its scrollable length from 0 - 1. For example, **0.5 equals 50%**. For example, this can be useful when creating a scroll progress bar.

### slidesInView

Parameters: `target: boolean`  
Returns: `number[]`

Get slide indexes visible in the carousel viewport. Honors the [inViewThreshold](/api/options/#inviewthreshold) option. Target will check slides visible at destination.

### slidesNotInView

Parameters: `target: boolean`  
Returns: `number[]`

Get slide indexes not visible in the carousel viewport. Honors the [inViewThreshold](/api/options/#inviewthreshold) option. Target will check slides not visible at destination.

### clickAllowed

Parameters: `none`  
Returns: `boolean`

For touch pointers, this method will return `false` when the gesture is a drag move or if the carousel is clicked during scroll. For mouse pointers, this method will only return `false` when the gesture is a drag move.

### reInit

Parameters: `options: EmblaOptions`  
Returns: `void`

Hard reset the carousel after it has been initialized. This method allows for changing the [options](/api/options/) entirely. It's useful for changing options depending on the screen size or similar.

### destroy

Parameters: `none`  
Returns: `void`

Destroy the carousel instance permanently. This is a one way operation and is intended to be used as a cleanup measure when the carousel instance isn't needed anymore.

### on

Parameters: `event: EmblaEvent`, `callback: Function`  
Returns: `void`

Subscribe to an Embla specific [event](/api/events/) with a callback.

### off

Parameters: `event: EmblaEvent`, `callback: Function`  
Returns: `void`

Unsubscribe from an Embla specific [event](/api/events/).
