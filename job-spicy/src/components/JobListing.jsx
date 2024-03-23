import { useNavigate } from "react-router-dom"
import { readableDate } from "../utils/string-manipulation/readableDate"
import { fixExcerpt } from "../utils/string-manipulation/fixExcerpt"
import { fixSalary } from "../utils/string-manipulation/fixSalary"
import { capitalizeType } from "../utils/string-manipulation/capitalizeType"
import { FavoritesButton } from "./FavoritesButton"
import { Link } from "react-router-dom"

export const JobListing = ({ job }) => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/job-spicy/jobs/${job.id}`)
	}

	return (
		<div onDoubleClick={handleClick} className='job-listing'>
			<div className='img-container'>
				<img
					src={job.companyLogo}
					alt={job.companyName}
					className='company-logo'
				/>
			</div>

			<div className='listing-text'>
				<h2 className='listing-text-child'>
					{job.jobTitle}{" "}
					<span className='company-name'>
						{" "}
						@ {job.companyName.replaceAll(/&#038;/g, "&")}
					</span>{" "}
				</h2>
				<p className='listing-text-child'>
					{fixExcerpt(job.jobExcerpt)}
					<Link to={`/job-spicy/jobs/${job.id}`} className='nav-link'>
						[Read More]
					</Link>
				</p>
				<p className='listing-text-child listing-important'>
					{job.jobGeo} | {capitalizeType(job.jobType)} | Experience Level:{" "}
					{job.jobLevel}{" "}
					{fixSalary(
						job.annualSalaryMin,
						job.annualSalaryMax,
						job.salaryCurrency
					)
						? `| Estimated Salary: ${fixSalary(
								job.annualSalaryMin,
								job.annualSalaryMax,
								job.salaryCurrency
						  )}`
						: ""}
				</p>
				<div className='listing-text-child date-and-save'>
					<p className='listing-text-child'>
						Posted: {readableDate(job.pubDate)}
					</p>
					<FavoritesButton job={job} />
				</div>
			</div>
		</div>
	)
}
