import { Grid, Divider, Header, Icon } from 'semantic-ui-react'
import SearchApi from './components/SearchApi'
import ShowButtons from './components/ShowButtons'
const Main = () => {
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
