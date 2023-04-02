import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Rating, Grid, Label, Dropdown } from 'semantic-ui-react'
import { selectFilters, setFilter } from '../features/filters'

const FavesFilter = () => {
	const filters = useSelector(selectFilters)
	const dispatch = useDispatch()

	const setRatingFilter = (e, { rating }) => {
		dispatch(setFilter({ rating }))
	}
	const setTypeFilter = (e, { value: type }) => {
		dispatch(setFilter({ type }))
	}

	return (
		<Grid>
			<Grid.Row style={{ gap: '10px' }}>
				<Label style={{ display: 'flex', alignItems: 'center' }}>Filter by Rating</Label>
				<Rating
					style={{ display: 'flex', alignItems: 'center' }}
					onRate={setRatingFilter}
					maxRating={5}
					icon="star"
					size="huge"
					rating={filters.rating}
				/>
				<Label style={{ display: 'flex', alignItems: 'center' }}>Filter by Type</Label>
				<Dropdown
					selection
					onChange={setTypeFilter}
					defaultValue="all"
					options={[
						{
							text: 'All',
							value: 'all',
						},
						{
							text: 'Films',
							value: 'films',
						},
						{
							text: 'Characters',
							value: 'characters',
						},
						{
							text: 'Starships',
							value: 'starships',
						},
						{
							text: 'Planets',
							value: 'planets',
						},
						{
							text: 'Vehicles',
							value: 'vehicles',
						},
					]}
				/>
			</Grid.Row>
		</Grid>
	)
}

export default FavesFilter
