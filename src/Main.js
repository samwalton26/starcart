import { Grid, Divider, Button, Header, Icon } from 'semantic-ui-react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchApi from './components/SearchApi'
import ShowButtons from './components/ShowButtons'
const Main = () => {
	const handleSelect = () => console.log('test')

	return (
		<>
			<Grid columns={2} stackable textAlign="center" style={{ margin: '0 auto' }}>
				<Divider vertical inverted>
					Or
				</Divider>

				<Grid.Row verticalAlign="middle" inverted>
					<Grid.Column>
						<Header icon inverted>
							<Icon name="search" inverted />
							Search
						</Header>
						<SearchApi />
					</Grid.Column>
					<Grid.Column>
						<ShowButtons />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</>
	)
}
export default Main
