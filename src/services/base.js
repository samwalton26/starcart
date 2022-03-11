import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query'

export const swapiApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://swapi.dev/api/',
	}),
	tagTypes: ['Films', 'Film', 'Characters', 'Character', 'Starships', 'Starship'],
})
