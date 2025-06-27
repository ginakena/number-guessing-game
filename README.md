# 🎯 Number Guessing Game
![Screenshot (284)](https://github.com/user-attachments/assets/93946095-470b-4fda-b8cb-f1481a7e78fb)
A fun and interactive number guessing game built using **React**, **TypeScript**, and **Vite**.

## 🔗 Live Demo

Play it here 👉 [number-guessing-game-dun-seven.vercel.app](https://number-guessing-game-dun-seven.vercel.app)

---

## 🕹️ How It Works

- A **random number** between 0 and 100 is generated.
- The player has **10 trials** to guess the number.
- After each guess:
  - If the guess is **too low**, a hint is shown.
  - If the guess is **too high**, feedback is provided.
- If the player guesses correctly before running out of trials, they win and receive a **score** based on the trials left (each trial is worth 10%).
- If all trials are used up without a correct guess, the correct number is revealed and the game ends.

---

## 🧠 Technologies Used

- **React** (with Vite)
- **TypeScript**
- **useReducer** hook for managing game state
- **CSS** for layout and styling
- **Vercel** for deployment

---

## 🚀 Getting Started

To run the game locally:

```bash
git clone https://github.com/your-username/number-guessing-game.git
cd number-guessing-game
npm install
npm run dev
```

## Project Structure


├── src

│   ├── App.tsx

│   ├── game.tsx        # Main game component

│   ├── App.css         # Styling

│   └── main.tsx

├── public

├── index.html

└── vite.config.ts

