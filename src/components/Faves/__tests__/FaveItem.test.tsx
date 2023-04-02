import { render, screen } from '@testing-library/react'

import FaveItem from '../FaveItem'
import userEvent from '@testing-library/user-event'

describe('FaveItem', () => {
	const mockHandleRating = jest.fn()
	const mockHandleRemove = jest.fn()

	const setupComponent = () =>
		render(
			<FaveItem
				fave={{
					id: 'test-id-1',
					name: 'Fav Item 1',
					rating: 5,
				}}
				handleRating={mockHandleRating}
				handleRemove={mockHandleRemove}
			/>
		)

	it('renders the name of the favourite item and avatar image', async () => {
        setupComponent()
        
		expect(await screen.findByText('Fav Item 1')).toBeInTheDocument()
		expect(await screen.findByAltText('avatar')).toBeInTheDocument()
	})

	it('makes the call to remove the favourite item when delete button is clicked', async () => {
        setupComponent()

		const deleteButton = await screen.findByRole('button', { name: 'delete' })
		expect(deleteButton).toBeInTheDocument()
		userEvent.click(deleteButton)

		expect(mockHandleRemove).toHaveBeenCalled()
	})

    it('makes the call to update the rating of a favourite item when a rating button is clicked', async () => {
        setupComponent()

		const ratingsRadioGroup = screen.getAllByRole('radio')

        const oneStarButton = ratingsRadioGroup[0]

		expect(oneStarButton).toBeInTheDocument()
		userEvent.click(oneStarButton)

		expect(mockHandleRating).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({ rating: 1 }));
	})

})
