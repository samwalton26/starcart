import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const swapApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.py4e.com/api/' }),
	tagTypes: ['Films', 'Characters', 'Starships', 'Planets', 'Vehicles'],
	endpoints: builder => ({
		getFilms: builder.query({
			query: () => `films/?format=json`,
		}),
		getFilm: builder.query({
			query: id => `films/${id}?format=json`,
		}),
		getCharacters: builder.query({
			query: (page) => `people/?format=json&page=${page}`,
		}),
		getCharacter: builder.query({
			query: id => `people/${id}?format=json`,
		}),
		getStarships: builder.query({
			query: (page) => `starships/?format=json&page=${page}`,
		}),
		getStarship: builder.query({
			query: id => `starships/${id}?format=json`,
		}),
		getSearch: builder.mutation({
			query: ({ str, filter }) => {
				return `${filter}/?search=${str}&format=json`
			},
		}),
		getPlanets: builder.query({
			query: (page) => `planets/?format=json&page=${page}`,
		}),
		getVehicles: builder.query({
			query: (page) => `vehicles/?format=json&page=${page}`,
		}),
	}),
})

export const {
	useGetSearchMutation,
	useGetStarshipQuery,
	useGetFilmQuery,
	useGetStarshipsQuery,
	useGetCharacterQuery,
	useGetFilmsQuery,
	useGetCharactersQuery,
	useGetPlanetsQuery,
	useGetVehiclesQuery,
} = swapApi
