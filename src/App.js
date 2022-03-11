import React from 'react'
import { Container, Header, Menu, Segment } from 'semantic-ui-react'
import Main from './Main'
function App() {
	return (
		<>
			<Container fluid inverted>
				<Segment inverted>
					<Header as="h1" content="Star Cart 🚀" />
					<Menu large pointing secondary></Menu>
					<Main />
				</Segment>
			</Container>
			<Container>
				<Segment fluid>
					<h3>results</h3>
				</Segment>
			</Container>
		</>
	)
}

export default App
