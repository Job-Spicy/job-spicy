import { useNavigate } from "react-router-dom"
import { readableDate } from "../utils/string-manipulation/readableDate"
import { fixExcerpt } from "../utils/string-manipulation/fixExcerpt"
import { fixSalary } from "../utils/string-manipulation/fixSalary"
import { capitalizeType } from "../utils/string-manipulation/capitalizeType"

export const JobListing = ({ job }) => {
	// check the provider file for any rendering issues i caught
	// how shall we render if there is no provided salary range? or one value is provided instead of two?

	// i'm not emotionally attached to this format, change it how you would like
	// as long as the information is there! ( and it's not ugly )

	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/jobs/${job.id}`)
	}

	return (
		<div onClick={handleClick}>
			<img src={job.companyLogo} />
			<h2>{job.jobTitle}</h2>
			<h3>{job.companyName}</h3>
			<p>{fixExcerpt(job.jobExcerpt)}</p>
			<p>
				{job.jobGeo} | {capitalizeType(job.jobType)} | Experience Level:{" "}
				{job.jobLevel} | Estimated Salary:{" "}
				{fixSalary(
					job.annualSalaryMin,
					job.annualSalaryMax,
					job.salaryCurrency
				)}
			</p>
			<p>Published: {readableDate(job.pubDate)}</p>
		</div>
	)
}
