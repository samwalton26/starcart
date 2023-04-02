import { Card } from 'semantic-ui-react'
import { useGetPlanetsQuery } from '../services/swapApi'
import ModalDetails from './ModalDetails'
import CardList from './CardList'

const Planets = () => {
	const favNameProperty = 'name'
	const renderCard = planet => (
		<Card.Content>
			<Card.Header>{planet.name}</Card.Header>
			{planet && planet.films && <Card.Meta> films : {planet.films.length}</Card.Meta>}
			<Card.Description>{planet.terrain}</Card.Description>
		</Card.Content>
	)

	const renderDetails = film => (
		<ModalDetails
			details={film}
			fields={[
				{ label: 'Terrain', value: 'terrain' },
				{ label: 'Diameter', value: 'diameter' },
				{ label: 'Climate', value: 'climate' },
				{ label: 'Gravity', value: 'gravity' },
				{ label: 'Population', value: 'population' },
			]}
			headerProperty='name'
		/>
	)

	return (
		<CardList
			query={useGetPlanetsQuery}
			renderCard={renderCard}
			renderDetails={renderDetails}
			favNameProperty={favNameProperty}
			pagination
		/>
	)
}

export default Planets
