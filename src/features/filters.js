import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	rating: 5,
	type: 'all',
}

export const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilter: (state, action) => {
			return { ...state, ...action.payload }
		},
	},
})

export const { setFilter } = filterSlice.actions
export const selectFilters = state => state.filters
