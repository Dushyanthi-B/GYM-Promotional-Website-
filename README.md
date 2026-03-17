# Fitness Gym Promotional Website

## Overview
Modern responsive single-page website for a fitness gym brand. Features hero, about, services, trainers, plans, contact form with EmailJS submission. Black/gold theme, animations (AOS), dark/light toggle, search/filter, smooth scroll.

Colors:
- Primary: #D4A017 (gold)
- Secondary: #3B2A12 (dark brown)
- BG: #000000
- Section: #2E2E2E
- Text: #D9D9D9

## Quick Start
1. Open `index.html` in browser.
2. For form: Sign up free at emailjs.com, replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY` in script.js.

## Structure
```
gym-website/
├── index.html
├── css/style.css
├── js/script.js
├── images/ (optional, using URL images)
└── README.md
```

## Features
- Fully responsive (mobile/tablet/desktop)
- Smooth animations
- Dark/light mode toggle
- Search/filter trainers/services
- Form validation + EmailJS API submit (success message)
- Fitness theme (bodybuilding logo)

## Deploy
1. **GitHub**: 
   - `git init`
   - `git add .`
   - `git commit -m "Initial gym website"`
   - `git remote add origin https://github.com/YOUR_USERNAME/gym-website.git`
   - `git push -u origin main`
2. **Netlify**:
   - Drag `gym-website` folder to netlify.com/drop
   - Or connect GitHub repo for auto-deploy.

## Figma Layout Structure (Textual)
- **Hero**: Full viewport height, center logo + H1 "Join the Elite" + gold CTA "Join Now" btn. Dark bg.
- **About**: Padding, centered text.
- **Services**: 4-card grid (responsive), icons + titles.
- **Trainers**: 3-card grid, photo/name/bio, search input above.
- **Plans**: 3 pricing cards, features list.
- **Contact**: Form centered, name/email/message.

Edit CSS/JS as needed. Add local images to `images/` and update paths.

## Tech
HTML5/CSS3/JS | AOS | EmailJS

