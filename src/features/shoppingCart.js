import { createSlice, nanoid } from '@reduxjs/toolkit'

// Under the assumption when cart is implemented, the item would adhere to the below interface

// interface Item {
// 	id: string;
// 	type: 'people' | 'starships' | 'vehicles' | 'planets' | 'films';
// 	name: string;
// }

const createItem = item => ({
	id: nanoid(),
	...item,
})
const initialState = {
	items: [],
	total: 0,
	prices: {
		people: 10,
		starships: 20,
		vehicles: 5.5,
		planets: 100,
		films: 12.99,
	},
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducer: {
		addItem: (state, action) => {
			// action.payload --> Omit<Item, "id">
			const {name, type} = action.payload;

			// If already exists, return current state
			if(state.find(item => item.name === name)) return state;

			// create item
			const item = createItem(action.payload)

			const newState = [...state]

			// add item to items
			newState.items.push(item)

			// update total
			newState.total = Math.round(state.total + state.prices[type] * 100) / 100

			// return new state
			return newState
		},
		removeItem: (state, action) => {
			const id = action.payload

			// find and remove item and return new state
			return state.filter(item => item.id !== id)
		},
	},
})

export const { addItem, removeItem } = cartSlice
