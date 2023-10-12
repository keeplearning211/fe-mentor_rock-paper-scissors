/* Instruments */
import { counterSlice } from './slices'
import gameSlice from './slices/gameSlice'

export const reducer = {
  counter: counterSlice.reducer,
  game: gameSlice.reducer
}
