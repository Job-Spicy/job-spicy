import { useContext } from "react"
import JobsContext from "../context/JobsContext"
import { JobListing } from "./JobListing"

export const Favorites = () => {
	// please find a way to use useEffect i beg of you
	const { favorites } = useContext(JobsContext)

	return (
		<>
			<h1>Favorites</h1>
			<h2>
				You've saved {favorites.length}{" "}
				{favorites.length === 1 ? "job" : "jobs"}
				{favorites.length ? "!" : " :("}
			</h2>
			<ul className='jobs-list'>
				{favorites.map(job => {
					return (
						<li key={job.id}>
							<JobListing job={job} favoritedAlready={true} />
						</li>
					)
				})}
			</ul>
		</>
	)
}
