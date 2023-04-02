import { Card } from 'semantic-ui-react'
import { useGetCharactersQuery } from '../services/swapApi'
import CardList from './CardList'
import ModalDetails from './ModalDetails'

const Characters = () => {
	const favNameProperty = 'name'
	const renderCard = character => (
		<Card.Content>
			<Card.Header>{character.name}</Card.Header>
			{character && character.films && <Card.Meta> films : {character.films.length}</Card.Meta>}
			<Card.Description>{character.gender}</Card.Description>
		</Card.Content>
	)
	const renderDetails = character => (
		<ModalDetails
			details={character}
			fields={[
				{ label: 'Birth Year', value: 'birth_year' },
				{ label: 'Height', value: 'height' },
				{ label: 'Mass', value: 'mass' },
				{ label: 'Hair Colour', value: 'hair_color' },
				{ label: 'Skin Colour', value: 'skin_color' },
				{ label: 'Eye Colour', value: 'eye_color' },
			]}
			headerProperty='name'
		/>
	)

	return (
		<CardList
			query={useGetCharactersQuery}
			renderCard={renderCard}
			renderDetails={renderDetails}
			favNameProperty={favNameProperty}
			pagination
		/>
	)
}
export default Characters
