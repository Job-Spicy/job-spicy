import { useContext } from "react"
import JobsContext from "../context/JobsContext"
import { JobListing } from "./JobListing"

export const Favorites = () => {
	
	const { favorites } = useContext(JobsContext)

	return (
		<>
			<h1>Favorites</h1>
			<h2>
				You've saved {favorites.length}{favorites.length === 1 ? " job" : " jobs"}
				{favorites.length ? "!" : " :("}
      </h2>
      <section>
			<ul className='jobs-list'>
				{favorites?.map(job => {
					return (
						<li key={job.id}>
							<JobListing job={job} />
						</li>
					)
				})}
        </ul>
        </section>
		</>
	)
}
