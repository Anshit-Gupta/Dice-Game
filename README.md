# Dice Game

A small interactive Dice Game built with React, Vite and styled-components.

Click a number (1–6), roll the dice — if your selected number matches the dice you gain points (equal to the dice), otherwise you lose 1 point. Built to learn React fundamentals, component design, CSS-in-JS with styled-components and deployment with Vercel.

## Demo
Live on Vercel: `https://anshit-dice-game.vercel.app/` 

## Features
- Clean component-based structure
- State management with `useState`
- Styled using `styled-components` (scoped CSS + dynamic styles)
- Number selection UI with selected-state highlighting
- Roll dice with random number generation
- Basic rules UI and error handling
- Easy to extend (add multiplayer, animations, scoring variants)

## Tech stack
- React (functional components + hooks)
- Vite (dev/build tooling)
- styled-components (CSS-in-JS)
- Deployed on Vercel


## Project structure (main files)
```
src/
  App.jsx
  components/
    StartGame.jsx
    GamePlay.jsx
    NumberSelector.jsx
    RollDice.jsx
    TotalScore.jsx
    RulesContainer.jsx
  images/
    dice/dice_1.png ... dice_6.png
    dices.png
```

## How it works (short)
- `App.jsx` toggles between `StartGame` and `GamePlay` using `useState`.
- `StartGame` shows the welcome screen and toggle button.
- `GamePlay` manages the main game state: selected number, current dice, score, error, rules visibility.
- `NumberSelector` displays 1–6 boxes; selected box is styled using a prop (`isSelected`).
- `RollDice` shows the dice image based on `currentDice` prop and triggers roll via `roledice` prop.
- `TotalScore` shows the current score.
- Styling is handled with `styled-components` so each component contains its styles.

## Common gotchas & fixes
- Use **relative image imports** or `import dice1 from './images/dice_1.png'` to avoid path issues on different hosts.
- If Vercel/Vite build fails with rollup/native binary errors, delete `node_modules` and `package-lock.json`, run `npm install` again (or switch to `pnpm`) and re-deploy.
- Avoid invalid imports like `import { div } from 'framer-motion/client'` — use `import { motion } from 'framer-motion'` and `<motion.div>`.

## Future improvements
- Add animations (Framer Motion)
- Add sound effects and better UI/UX
- Unit tests for components
- Convert to TypeScript
- Add persistent scoreboard (localStorage or backend)

