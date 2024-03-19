import { useContext } from "react"
import { Link } from "react-router-dom"
import JobsContext from "../context/JobsContext"
import { FilterForm } from "./FilterForm"
import { JobListing } from "./JobListing"

export const JobsList = () => {
	const { jobs } = useContext(JobsContext)

	return (
		<>
			<h1>Job Spicy 🌶️</h1>
			<ul>
				{jobs.map(job => {
					return (
						<li key={job.id}>
							<JobListing job={job} />
						</li>
					)
				})}
			</ul>
		</>
	)
}
