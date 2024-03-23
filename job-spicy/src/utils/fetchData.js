export const fetchData = async (url, options = {}) => {
	try {
		const response = await fetch(url, options)

		if (!response.ok)
			throw new Error(
				`Fetch failed with status - ${response.status}, ${response.statusText}`
			)

		const isJson = (response.headers.get("content-type") || "").includes(
			"application/json"
		)
		if (isJson) {
			return [await response.json(), null]
		} else {
			return [await response.text(), null]
		}
	} catch (error) {
		console.warn(error)
		return [null, error]
	}
}
