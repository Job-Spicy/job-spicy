import { useContext } from "react"
import JobsContext from "../context/JobsContext"
import { JobListing } from "./JobListing"

export const JobsList = () => {
	const { jobs } = useContext(JobsContext)

	return (
		<section>
			<ul className='jobs-list'>
				{jobs.map(job => {
					return (
						<li key={job.id}>
							<JobListing job={job} />
						</li>
					)
				})}
			</ul>
		</section>
	)
}
