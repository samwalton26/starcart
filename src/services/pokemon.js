import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
	reducerPath: 'pokemonApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
	endpoints: builder => ({
		getPokemonByName: builder.query({
			query: () => `films/?format=json`,
		}),
	}),
})

export const { useGetPokemonByNameQuery } = pokemonApi
