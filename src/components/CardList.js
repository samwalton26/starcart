import { Button, Card, Loader, Message, Pagination } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import usePagination from '../hooks/usePagination'
import { addFave } from '../features/faves'
import { selectCurrent } from '../features/app'

const CardList = ({ query, renderCard, renderDetails, favNameProperty, pagination }) => {
	const { data, isError, isLoading, handlePageChange, page } = usePagination(query, 1)
	const current = useSelector(selectCurrent)

	const dispatch = useDispatch()

	const addToFavourites = (favName, favItem, favType) => dispatch(addFave({ favName, favItem, favType }))

	if (isLoading) {
		return <Loader active={isLoading} />
	}
	if (isError) {
		return <Message error={isError}>There was an error</Message>
	}
	if (data && Boolean(data?.results?.length)) {
		return (
			<>
				<Card.Group centered>
					{data.results.map(item => (
						<Card key={nanoid()}>
							{renderCard(item)}
							<Card.Content extra>
								{renderDetails(item)}
								<Button
									icon={{ name: 'plus', size: 'small' }}
									data-title={item.name || item.title}
									positive
									content="Add to faves"
									onClick={() => addToFavourites(item[favNameProperty], item, current)}
								/>
							</Card.Content>
						</Card>
					))}
				</Card.Group>
				{pagination && (
					<Pagination
						style={{ marginTop: '1rem' }}
						activePage={page}
						firstItem={null}
						lastItem={null}
						siblingRange={1}
						onPageChange={(e, data) => handlePageChange(data.activePage)}
						totalPages={Math.ceil(data.count / 10)}
					/>
				)}
			</>
		)
	} else if (data?.results?.length === 0) {
		return <Message warning>no data found</Message>
	}
	return null
}

export default CardList
