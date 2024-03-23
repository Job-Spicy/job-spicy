import { useNavigate } from "react-router-dom"
import { readableDate } from "../utils/string-manipulation/readableDate"
import { fixExcerpt } from "../utils/string-manipulation/fixExcerpt"
import { fixSalary } from "../utils/string-manipulation/fixSalary"
import { capitalizeType } from "../utils/string-manipulation/capitalizeType"
import { FavoritesButton } from "./FavoritesButton"
import { Link } from "react-router-dom"

export const JobListing = ({ job, favoritedAlready }) => {
	// check the provider file for any rendering issues i caught
	// how shall we render if there is no provided salary range? or one value is provided instead of two?

	// i'm not emotionally attached to this format, change it how you would like
	// as long as the information is there! ( and it's not ugly )

	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/jobs/${job.id}`)
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
					<span className='company-name'> @ {job.companyName}</span>{" "}
					{/* fix & in name */}
				</h2>
				<p className='listing-text-child'>
					{fixExcerpt(job.jobExcerpt)}
					<Link to={`/jobs/${job.id}`} className='nav-link'>
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
					<FavoritesButton favoritedAlready={favoritedAlready} job={job} />
				</div>
			</div>
		</div>
	)
}
