import { useReducer } from 'react';
import './App.css'; 

type State = {
  secretNumber: number;
  trialsLeft: number;
  guess: string;
  feedback: string;
  gameOver: boolean;
  gameWon: boolean;
};

type Action =
  | { type: 'Secret_Number'; payload: string }
  | { type: 'Make_Guess' }
  | { type: 'New_Game' };

const initialState: State = {
  secretNumber: Math.floor(Math.random() * 101),
  trialsLeft: 10,
  guess: '',
  feedback: '',
  gameOver: false,
  gameWon: false,
};

function gameReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'Secret_Number':
      return {
        ...state,
        guess: action.payload,
      };

    case 'Make_Guess': {
      const guessNum = parseInt(state.guess);
      const newTrialsLeft = state.trialsLeft - 1;

      if (guessNum === state.secretNumber) {
        const score = newTrialsLeft * 10;
        return {
          ...state,
          feedback: `You won! Score: ${score}%`,
          gameOver: true,
          gameWon: true,
        };
      }

      if (newTrialsLeft === 0) {
        return {
          ...state,
          feedback: `You lost! Secret number was ${state.secretNumber}`,
          trialsLeft: 0,
          gameOver: true,
        };
      }

      return {
        ...state,
        trialsLeft: newTrialsLeft,
        feedback: `${guessNum} is too ${guessNum < state.secretNumber ? 'low' : 'high'}`,
        guess: '',
      };
    }

    case 'New_Game':
      return {
        ...initialState,
        secretNumber: Math.floor(Math.random() * 101),
      };

    default:
      return state;
  }
}

function Game() {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <div className="container">
      <header className="header">
        <h1 className="game-instruction">GUESS A NUMBER BETWEEN 0 AND 100</h1>
        <button
          className="new-game"
          onClick={() => dispatch({ type: 'New_Game' })}
          disabled={!state.gameOver}
        >
          NEW GAME
        </button>
      </header>

      <form
        className="game-input"
        onSubmit={(e) => {
          e.preventDefault();
          if (state.guess !== '') {
            dispatch({ type: 'Make_Guess' });
          }
        }}
      >
        <h2 className="trials">{state.trialsLeft} TRIALS REMAINING</h2>
        <input
          type="number"
          className="input-box"
          placeholder='00'
          value={state.guess}
          onChange={(e) => dispatch({ type: 'Secret_Number', payload: e.target.value })}
          disabled={state.gameOver}
        />
        <button type="submit" disabled={state.guess === '' || state.gameOver}>
          GUESS
        </button>
      </form>

      <h2 className="feedback">{state.feedback}</h2>
    </div>
  );
}

export default Game;
