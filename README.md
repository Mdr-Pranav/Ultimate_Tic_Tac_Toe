# Ultimate Tic-Tac-Toe vs. AI

[![CI](https://github.com/Mdr-Pranav/Ultimate_Tic_Tac_Toe/actions/workflows/ci.yml/badge.svg)](https://github.com/Mdr-Pranav/Ultimate_Tic_Tac_Toe/actions/workflows/ci.yml)

Play **Ultimate Tic-Tac-Toe** — nine tic-tac-toe boards inside one big board — against an AI opponent with three difficulty levels, each backed by a different strategy, from random play up to a deep reinforcement-learning agent with Monte Carlo Tree Search.

## How to play

- The board is a 3×3 grid of small 3×3 boards.
- Win a small board by getting three in a row inside it.
- **Where you play decides where your opponent must play next:** if you mark the top-right cell of a small board, your opponent's next move must be in the top-right small board.
- If you're sent to a board that's already won or full, you may play anywhere.
- Win three small boards in a row to win the game.

## AI difficulty levels

| Level | Strategy | Model |
|---|---|---|
| **Easy** | Uniformly random legal move | — |
| **Medium** | Deep Q-Network with residual blocks and a self-attention block, trained with prioritized experience replay | `backend/final_improved_model.pt` (`improved_training.py`) |
| **Hard** | AlphaZero-style policy + value network guiding **Monte Carlo Tree Search**, trained with PPO self-play | `backend/ultimate_tic_tac_toe_ppo_final.pth` (`alpha_zero.py`, `ppo_train.py`) |

Every model output is masked to legal moves, so the AI never plays an illegal move; if a model fails to load, that level falls back to random play.

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React, TypeScript, Vite, Tailwind CSS, shadcn/ui |
| Backend | Python, FastAPI, Uvicorn |
| AI | PyTorch (DQN, AlphaZero-style network + MCTS, PPO) |

## Running locally

**Prerequisites:** Node.js 18+, Python 3.10+

### 1. Backend (AI server on port 8000)

```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
python run.py
```

Run it from inside `backend/` — the model files are loaded from the current directory.

### 2. Frontend (port 8080)

```bash
npm install
npm run dev
```

Then open the URL Vite prints and pick a difficulty.

## API

| Method | Endpoint | Description |
|---|---|---|
| GET | `/game-state` | Current board state |
| POST | `/make-move` | Play a move (`difficulty`: `easy` \| `medium` \| `hard`); returns the AI's reply |
| POST | `/reset` | Start a new game |

## Project structure

```
Ultimate_Tic_Tac_Toe/
├── src/                     # React + TypeScript frontend
│   └── pages/GameBoard.tsx  # Game UI and API calls
├── backend/
│   ├── main.py              # FastAPI server, game rules, AI move selection
│   ├── alpha_zero.py        # AlphaZero-style network + MCTS (Hard)
│   ├── improved_training.py # DQN training (Medium)
│   ├── ppo_train.py         # PPO self-play training (Hard)
│   └── *.pt / *.pth         # Trained model weights
└── package.json
```

## Retraining the models

`improved_training.py` and `ppo_train.py` train the Medium and Hard agents from scratch. `ppo_train.py` additionally needs `wandb` (`pip install wandb`) and logs runs to Weights & Biases.

## License

[MIT](LICENSE)
