import { useParams } from "react-router-dom"
import { useContext } from "react"
import JobsContext from "../context/JobsContext"
import { readableDate } from "../utils/string-manipulation/readableDate"
import { fixSalary } from "../utils/string-manipulation/fixSalary"
import { capitalizeType } from "../utils/string-manipulation/capitalizeType"
import { fixIndustry } from "../utils/string-manipulation/fixIndustry"
import { FavoritesButton } from "./FavoritesButton"
import { Fallback } from "./Fallback"

export const JobDetails = ({ favoritedAlready }) => {
	//individual page for jobs once they've been clicked on
	const { jobs } = useContext(JobsContext)
	const { id } = useParams()

	const currJob = jobs.find(job => job.id === parseInt(id))
	if (!currJob) return <Fallback />

	// you know the vibes. all the stuff here is just placeholders. move
	// it around however you want.

	return (
		<>
			<h1>
				{currJob.jobTitle}
				<span className='company-name'> @ {currJob.companyName}</span>{" "}
			</h1>
			<img
				src={currJob.companyLogo}
				alt={currJob.companyName}
				className='company-logo'
			/>
			<div id='job-overview'>
				{fixSalary(
					currJob.annualSalaryMin,
					currJob.annualSalaryMax,
					currJob.salaryCurrency
				) && (
					<div className='fun-fact'>
						<h3>Estimated Salary:</h3>
						<p>
							{fixSalary(
								currJob.annualSalaryMin,
								currJob.annualSalaryMax,
								currJob.salaryCurrency
							)}
						</p>
					</div>
				)}
				<div className='fun-fact'>
					<h3>Remote From:</h3>
					<p>{currJob.jobGeo}</p>
				</div>
				<div className='fun-fact'>
					<h3>Experience Level:</h3>
					<p>{currJob.jobLevel}</p>
				</div>
				<div className='fun-fact'>
					<h3>Job Type:</h3>
					<p>{capitalizeType(currJob.jobType)}</p>
				</div>
				<div className='fun-fact'>
					<h3>Industry:</h3>
					<p>{fixIndustry(currJob.jobIndustry)}</p>
				</div>
				<div className='fun-fact'>
					<h3>Published:</h3>
					<p>{readableDate(currJob.pubDate)}</p>
				</div>
			</div>

			<FavoritesButton favoritedAlready={favoritedAlready} />
			<hr id='detail-divider'></hr>

			<div
				id='job-description'
				dangerouslySetInnerHTML={{ __html: currJob.jobDescription }}
			></div>
		</>
	)
}
