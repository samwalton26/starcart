/* eslint-disable no-unused-labels */
/* eslint-disable no-labels */
import { swapiApi } from './base'

export const filmsApi = swapiApi.injectEndpoints({
	endpoints: build => {
		getFilms: build.query({
			query: () => `/films/?format=json`,
		})
		getFilm: build.query({
			query: id => `/films/${id}?format=json`,
		})
	},
})
export const { useGetFilmsQuery, usetGetFilmQuery } = filmsApi
