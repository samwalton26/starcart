import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query'

export const swapiApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://swapi.dev/api/',
	}),
	tagTypes: ['Films', 'Film', 'Characters', 'Character', 'Starships', 'Starship'],
	endpoints: build => ({
		getCharacters: build.query({
			query: () => `/people/?format=json`,
		}),

		getCharacter: build.query({
			query: id => `/people/${id}?format=json`,
		}),
		getFilms: build.query({
			query: () => {
				console.log('getFilms')
				return `/films/?format=json`
			},
			providesTags: ['Films'],
		}),
		getFilm: build.query({
			query: id => `/films/${id}?format=json`,
		}),
	}),
})
export const { useGetCharactersQuery, useGetCharacterQuery, useGetFilmsQuery, useGetFilmQuery } = swapiApi
