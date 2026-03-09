# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./images/screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/g-akca/news-homepage)
- Live Site URL: [News Homepage](https://g-akca.github.io/news-homepage/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Media queries
- Dynamic JavaScript

### What I learned

I learned how the requestAnimationFrame() function in JavaScript works.

```js
requestAnimationFrame(() => {
    overlay.classList.add("active");
    navBar.classList.add("active");
});
```

### Continued development

Although my menu works perfectly, I feel like there could be a simpler way to achieve the animation instead of using two classes (menu and active).

## Author

- GitHub - [@g-akca](https://github.com/g-akca)
- Frontend Mentor - [@g-akca](https://www.frontendmentor.io/profile/g-akca)