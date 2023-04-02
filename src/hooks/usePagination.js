import { useState } from 'react'

const usePagination = (queryHook, initialPage) => {
	const [page, setPage] = useState(initialPage)
	const { data, isError, isLoading } = queryHook(page)

	const handlePageChange = page => {
		setPage(page)
	}

	return {
		data,
		isError,
		isLoading,
		handlePageChange,
		page,
	}
}

export default usePagination
