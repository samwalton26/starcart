import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query'

export const swapiApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://swapi.dev/api/',
	}),
	endpoints: build => ({
		getCharacters: build.query({
			query: () => `/people/?format=json`,
		}),
		getCharacter: build.query({
			query: id => `/people/${id}?format=json`,
		}),
		getFilms: build.query({
			query: () => `/films/?format=json`,
		}),
		getFilm: build.query({
			query: id => `/films/${id}?format=json`,
		}),
	}),

	tagTypes: ['Films', 'Film', 'Characters', 'Character', 'Starships', 'Starship'],
})
export const { useGetCharactersQuery, useGetCharacterQuery, useGetFilmsQuery, useGetFilmQuery } = swapiApi
