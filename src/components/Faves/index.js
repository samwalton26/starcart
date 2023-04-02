import { useSelector } from 'react-redux'
import { List, Message } from 'semantic-ui-react'
import { selectFaveState } from '../../features/faves'
import { selectFilters } from '../../features/filters'
import Fave from './FaveContainer.tsx'

const Faves = () => {
	const faves = useSelector(selectFaveState)
	const { rating, type } = useSelector(selectFilters)

	if (!faves) {
		return <Message header="no faves" />
	}

	const filterFaves = (faves, rating, type) => {
		if (type === 'all') {
			return faves.filter(fave => fave.rating === rating)
		} else {
			return faves.filter(fave => fave.rating === rating && fave.type === type)
		}
	}
	return (
		<List horizontal divided>
			{filterFaves(faves, rating, type).map(fave => (
				<Fave key={fave.id} fave={fave} />
			))}
		</List>
	)
}

export default Faves
