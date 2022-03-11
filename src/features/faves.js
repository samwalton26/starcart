import { createSlice, nanoid } from '@reduxjs/toolkit'

const createFave = fave => ({
	id: nanoid(),
	rating: 1,
	...fave,
})
const initialState = []

export const favesSlice = createSlice({
	name: 'faves',
	initialState,
	reducers: {
		addFave: (state, action) => {
			const fave = createFave(action.payload)
			state.fave.push(fave)
		},
		rateFave: (state, action) => {
			// find fave
			// update rating
		},
		removeFave: (state, action) => {
			// find fave
			// remove fave
		},
	},
})

export const { setCharacter } = favesSlice
export const { addFave } = favesSlice.actions
