import { useState, useEffect } from "react"
import JobsContext from "./JobsContext"
import { fetchData } from "../utils/fetchData"
import { getLocalFavorites, setLocalFavorites } from "../utils/data-layer"

const JobsProvider = ({ children }) => {

	const [jobs, setJobs] = useState([])
	const [url, setURL] = useState("https://jobicy.com/api/v2/remote-jobs")

	const [geo, setGeo] = useState("")
	const [count, setCount] = useState("50")
	const [industry, setIndustry] = useState("")
	const [tag, setTag] = useState("")

	const [favorites, setFavorites] = useState([...getLocalFavorites()])

	useEffect(() => {
		const doFetch = async () => {
			const [data, error] = await fetchData(url)
			if (data) setJobs(data.jobs)
			if (error) setError(error)
		}
		doFetch()
	}, [url])

	useEffect(() => {
    setLocalFavorites(favorites)
	}, [favorites])

	const contextValues = {
		jobs,
		url,
		setURL,
		geo,
		setGeo,
		industry,
		setIndustry,
		count,
		setCount,
		tag,
		setTag,
		favorites,
		setFavorites,
	}

	return (
		<JobsContext.Provider value={contextValues}>
			{children}
		</JobsContext.Provider>
	)
}

export default JobsProvider
