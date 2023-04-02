import { Card } from 'semantic-ui-react'
import { useGetStarshipsQuery } from '../services/swapApi'
import ModalDetails from './ModalDetails'
import CardList from './CardList'

const Starships = () => {
	const favNameProperty = 'name'
	const renderCard = ship => (
		<Card.Content>
			<Card.Header>{ship.name}</Card.Header>
			{ship && ship.films && <Card.Meta> films : {ship.films.length}</Card.Meta>}
			<Card.Description>{ship.manufacturer}</Card.Description>
		</Card.Content>
	)

	const renderDetails = film => (
		<ModalDetails
			details={film}
			fields={[
				{ label: 'Cost', value: 'cost_in_credits' },
				{ label: 'Length', value: 'length' },
				{ label: 'Crew', value: 'crew' },
				{ label: 'Cargo Capacity', value: 'cargo_capacity' },
				{ label: 'Class', value: 'starship_class' },
			]}
			headerProperty='name'
		/>
	)

	return (
		<CardList
			query={useGetStarshipsQuery}
			renderCard={renderCard}
			renderDetails={renderDetails}
			favNameProperty={favNameProperty}
			pagination
		/>
	)
}

export default Starships
