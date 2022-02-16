# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [My goals](#My-goals-in-this-project)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://heuristic-keller-9cf253.netlify.app/#services)

## My process

### Built with

- HTML
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### My goals in this project

- My first goal was to make class names easier to use and navigate to. So i decided to use BEM methodology, here's example: 

```html
<div class="nav__menu" id="nav-menu">
  <ul class="nav__list">
    <li class="nav__item">
      <a href="#about" class="active-link nav__link">About</a>
    </li>
  </ul>
</div>

```

- My second goal was to use css variables. Here's few examples:

Color Pallete:
```css
:root {
  /*========== Colors ==========*/
  --home-color-alt: rgb(143, 218, 255);
  --scroll-color: hsl(212, 27%, 19%, 0.5);
  --background-color: hsl(26, 100%, 99%);
  --footer-background-color: hsl(167, 44%, 70%);
  --footer-text-color: hsl(166, 42%, 33%);

  --soft-red-color: hsl(7, 99%, 70%);
  --red-color: hsl(7, 100%, 57%);
  --soft-yellow-color: hsl(51, 100%, 77%);
  --yellow-color: hsl(51, 100%, 49%);
  --dark-desaturated-cyan-color: hsl(167, 40%, 24%);
  --dark-blue-color: hsl(198, 62%, 26%);
  --dark-moderate-cyan-color: hsl(168, 34%, 41%);

  --title-color: hsl(212, 27%, 19%);
  --text-color: hsl(213, 9%, 39%);
  --dark-grayish-blue-color: hsl(232, 10%, 55%);
  --grayish-blue-color: hsl(210, 4%, 67%);
  --white-color: hsl(0, 0%, 100%);
}
```

Margenes:
```css
:root {
   /*========== Margenes ==========*/
  --mb-0-5: .5rem;
  --mb-0-75: .75rem;
  --mb-1: 1rem;
  --mb-1-5: 1.5rem;
  --mb-2: 2rem;
  --mb-2-5: 2.5rem;
  --mb-3: 3rem;
  --mb-3-5: 3.5rem;
}
```

- My third goal was to use pure js to implement responsive nav-menu.

- And the last goal was to build this project with mobile-first approach.