import { Card } from 'semantic-ui-react'
import { useGetVehiclesQuery } from '../services/swapApi'
import ModalDetails from './ModalDetails'
import CardList from './CardList'

const Vehicles = () => {
	const favNameProperty = 'name'
	const renderCard = vehicle => (
		<Card.Content>
			<Card.Header>{vehicle.name}</Card.Header>
			{vehicle && vehicle.films && <Card.Meta> films : {vehicle.films.length}</Card.Meta>}
			<Card.Description>{vehicle.model}</Card.Description>
		</Card.Content>
	)

	const renderDetails = vehicle => (
		<ModalDetails
			details={vehicle}
			fields={[
				{ label: 'Model', value: 'model' },
				{ label: 'Manufacturer', value: 'manufacturer' },
				{ label: 'Cost', value: 'cost_in_credits' },
				{ label: 'Length', value: 'length' },
				{ label: 'Crew', value: 'crew' },
				{ label: 'Passengers', value: 'passengers' },
				{ label: 'Cargo Capacity', value: 'cargo_capacity' },
				{ label: 'Vehicle Class', value: 'vehicle_class' },
			]}
			headerProperty='name'
		/>
	)

	return (
		<CardList
			query={useGetVehiclesQuery}
			renderCard={renderCard}
			renderDetails={renderDetails}
			favNameProperty={favNameProperty}
			pagination
		/>
	)
}

export default Vehicles
