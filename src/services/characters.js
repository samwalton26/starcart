/* eslint-disable no-unused-labels */
/* eslint-disable no-labels */
import { swapiApi } from './base'

export const charactersApi = swapiApi.injectEndpoints({
	endpoints: build => {
		getCharacters: build.query({
			query: () => `/people/?format=json`,
		})
		getCharacter: build.query({
			query: id => `/people/${id}?format=json`,
		})
	},
})
export const { useGetFilmsQuery, usetGetFilmQuery } = charactersApi
