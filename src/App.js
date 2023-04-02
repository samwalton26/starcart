import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'
import { selectCurrent } from './features/app'
import Main from './Main'
import { useSelector } from 'react-redux'
import Films from './components/Films'
import Characters from './components/Characters'
import Starships from './components/Starships'
import Planets from './components/Planets'
import Vehicles from './components/Vehicles'
function App() {
	const current = useSelector(selectCurrent)
	return (
		<>
			<Container fluid>
				<Segment inverted>
					<Header as="h1" content="Star Cart 🚀" />
					{/* Doesn't seem to be used yet */}
					{/* <Menu pointing secondary></Menu> */}
					<Main />
				</Segment>
			</Container>
			<Container>
				<Segment style={{ marginTop: '1rem'}}>
					{current === 'films' && <Films />}
					{current === 'characters' && <Characters />}
					{current === 'starships' && <Starships />}
					{current === 'planets' && <Planets />}
					{current === 'vehicles' && <Vehicles />}
				</Segment>
			</Container>
		</>
	)
}

export default App
