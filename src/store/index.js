import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { characterSlice } from './../features/character'
import { filmSlice } from './../features/film'
import { favesSlice } from './../features/faves'
import { swapiApi } from './../services/base'
export const store = configureStore({
	reducer: {
		character: characterSlice.reducer,
		film: filmSlice.reducer,
		faves: favesSlice.reducer,
		// [swapiApi.reducerPath]: swapiApi.reducer,
	},
	// middleware: gdm => gdm().concat(swapiApi.middleware),
})
setupListeners(store.dispatch)
