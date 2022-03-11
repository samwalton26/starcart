import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { characterSlice } from './../features/character'
import { filmSlice } from './../features/film'
import { favesSlice } from './../features/faves'
import { swapiApi } from './../services/base'
import { appSlice } from '../features/app'
export const store = configureStore({
	reducer: {
		character: characterSlice.reducer,
		film: filmSlice.reducer,
		faves: favesSlice.reducer,
		app: appSlice.reducer,
		[swapiApi.reducerPath]: swapiApi.reducer,
	},
	middleware: gdm => gdm().concat(swapiApi.middleware),
})
setupListeners(store.dispatch)
