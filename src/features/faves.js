import { createSlice, nanoid } from '@reduxjs/toolkit'

const createFave = (fave, name, type) => ({
	id: nanoid(),
	rating: 5,
	name,
	type,
	...fave,
})
const initialState = []

export const favesSlice = createSlice({
	name: 'faves',
	initialState,
	reducers: {
		addFave: (state, action) => {
			const {favName: name, favType: type} = action.payload
			// If already exists, return current state
			if (state.find(fav => fav.name === name)) return state
			const fave = createFave(action.payload.favItem, name, type)
			return [...state, fave]
		},
		updateFave: (state, action) => {
			// find fave
			// update fave with array of ids if none exists,
			// or add related id if doesn't exist in array already
			// return state
		},
		rateFave: (state, action) => {
			const { id, rating } = action.payload
			// find fave index
			const faveIndex = state.findIndex(fave => fave.id === id)

			// If not found, return current state
			if (faveIndex === -1) return state

			// New state array to avoid modifying state directly
			const newState = [...state]

			// update rating on that fave
			newState[faveIndex] = {
				...state[faveIndex],
				rating,
			}

			// return state
			return newState
		},
		removeFave: (state, action) => {
			const id = action.payload
			return state.filter(fav => fav.id !== id)
		},
	},
})

export const { addFave, removeFave, rateFave } = favesSlice.actions
export const selectFaveState = state => state.faves
