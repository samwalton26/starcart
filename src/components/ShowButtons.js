import { Header, Divider, Button, Icon } from 'semantic-ui-react'
const ShowButtons = () => {
	return (
		<>
			<Header icon inverted>
				<Icon name="table" inverted />
				Show
			</Header>
			<Divider hidden />
			<Button.Group>
				<Button active={false}>
					<Icon name="film" />
					Films
				</Button>
				<Button active={false}>
					<Icon name="users" />
					Characters
				</Button>
				<Button active={false}>
					<Icon name="rocket" />
					Starships
				</Button>
			</Button.Group>
		</>
	)
}
export default ShowButtons
