import React from 'react'
import { Container, Header, Menu, Segment } from 'semantic-ui-react'
import { selectCurrent } from './features/app'
import Main from './Main'
import { useSelector } from 'react-redux'
import Films from './components/Films'
function App() {
	const current = useSelector(selectCurrent)
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
				<Segment fluid>{current === 'films' && <Films />}</Segment>
			</Container>
		</>
	)
}

export default App
