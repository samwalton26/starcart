import { Loader, Message } from 'semantic-ui-react'
import { useGetFilmsQuery } from '../services/swapApi'

const Films = () => {
	const { data, isError, isLoading } = useGetFilmsQuery()
	if (isLoading) {
		return <Loader active={isLoading} />
	}
	if (isError) {
		return <Message error={isError}>There was an error</Message>
	}
	if (data && Boolean(data?.results?.length)) {
		return data.results.map(film => {
			return <h2>{film.title}</h2>
		})
	} else if (data?.results?.length === 0) {
		return <Message warning>no films found</Message>
	}
	return null
}
export default Films
