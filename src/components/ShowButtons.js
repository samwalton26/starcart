import { Header, Divider, Button } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrent, setCurrent } from './../features/app'
const ShowButtons = () => {
	const current = useSelector(selectCurrent)
	const dispatch = useDispatch()
	const handleUpdateCurrent = selected => dispatch(setCurrent(selected))
	const buttons = [
		{
			name: 'Films',
			value: 'films',
			icon: 'film',
		},
		{
			name: 'Characters',
			value: 'characters',
			icon: 'users',
		},
		{
			name: 'Starships',
			value: 'starships',
			icon: 'rocket',
		},
		{
			name: 'Planets',
			value: 'planets',
			icon: 'globe',
		},
		{
			name: 'Vehicles',
			value: 'vehicles',
			icon: 'car',
		},
	]
	return (
		<>
			<Header inverted style={{ display: 'inline-block' }} icon={{ name: 'table' }} content="Star Cart" />
			<Divider hidden />
			<Button.Group>
				{buttons.map(button => (
					<Button
						key={button.name}
						active={current === button.value}
						content={button.name}
						icon={{ name: button.icon }}
						onClick={() => handleUpdateCurrent(button.value)}
					/>
				))}
			</Button.Group>
		</>
	)
}
export default ShowButtons
