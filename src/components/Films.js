import { Card } from 'semantic-ui-react'
import { useGetFilmsQuery } from '../services/swapApi'
import ModalDetails from './ModalDetails'
import CardList from './CardList'

const Films = () => {
	const favNameProperty = 'title'
	const renderCard = film => (
		<Card.Content>
			<Card.Header>{film.title}</Card.Header>
			{film && film.characters && <Card.Meta> characters : {film.characters.length}</Card.Meta>}
			<Card.Description>{film.opening_crawl}</Card.Description>
		</Card.Content>
	)
	const renderDetails = film => (
		<ModalDetails
			details={film}
			fields={[
				{ label: 'Directed by', value: 'director' },
				{ label: 'Opening Text', value: 'opening_crawl' },
				{ label: 'Release Date', value: 'release_date' }
			]}
			headerProperty='title'
		/>
	)


	return (
		<CardList
			query={useGetFilmsQuery}
			renderCard={renderCard}
			renderDetails={renderDetails}
			favNameProperty={favNameProperty}
			pagination
		/>
	)
}

export default Films
