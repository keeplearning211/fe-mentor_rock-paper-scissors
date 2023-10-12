import { createSlice, createSelector, type PayloadAction } from '@reduxjs/toolkit';
import type { ReduxState } from '@/lib/redux'

export type GameDecision = 'scissors' | 'rock' | 'paper' | null
export type GameResult = 'win' | 'lose' | 'draw' | null

export interface GameSliceState {
  score: number
  userDecision: GameDecision
  appDecision: GameDecision
  result: GameResult
}

const initialState: GameSliceState = {
  score: 0,
  userDecision: null,
  appDecision: null,
  result: null,
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setScore: (state, action: PayloadAction<GameResult>) => {
      let addScore = 0;
      switch (action.payload) {
        case 'win':
          addScore = 1;
          break;
        case 'lose':
          addScore = -1;
          break;
        default:
          addScore = 0;
      }

      state.score += addScore;
    },
    incrementScore: (state) => {
      state.score += 1;
    },
    decrementScore: (state) => {
      state.score -= 1;
    },
    setUserDecision: (state, action: PayloadAction<GameDecision>) => {
      state.userDecision = action.payload;
    },
    setAppDecision: (state, action: PayloadAction<GameDecision>) => {
      state.appDecision = action.payload;
    },
    setResult: (state, action: PayloadAction<GameResult>) => {
      state.result = action.payload;
    },
    playAgain: (state) => {
      state.userDecision = null
      state.appDecision = null
      state.result = null
    }
    // Add other reducers as needed
  },
});

export const {
  setScore,
  incrementScore,
  decrementScore,
  setUserDecision,
  setAppDecision,
  setResult,
  playAgain,
} = gameSlice.actions;

const selectGame = (state: ReduxState) => state.game
export const selectUserDecision = createSelector(
  [selectGame],
  (game) => game.userDecision
)

export const selectAppDecision = createSelector(
  [selectGame],
  (game) => game.appDecision
)

export const selectResult = createSelector(
  [selectGame],
  game => game.result
)

export const selectScore = createSelector(
  [selectGame],
  game => game.score
)

export default gameSlice;