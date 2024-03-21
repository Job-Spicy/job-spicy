import { useParams } from "react-router-dom"
import { useContext } from "react"
import JobsContext from "../context/JobsContext"
import { readableDate } from "../utils/string-manipulation/readableDate"
import { fixSalary } from "../utils/string-manipulation/fixSalary"
import { capitalizeType } from "../utils/string-manipulation/capitalizeType"
import { fixIndustry } from "../utils/string-manipulation/fixIndustry"

import { Fallback } from "./Fallback"

export const JobDetails = () => {
	//individual page for jobs once they've been clicked on
	const { jobs } = useContext(JobsContext)
	const { id } = useParams()

	const currJob = jobs.find(job => job.id === parseInt(id))
	if (!currJob) return <Fallback />

	// you know the vibes. all the stuff here is just placeholders. move
	// it around however you want.

	return (
		<>
			<h1> {currJob.jobTitle} </h1>
			<img src={currJob.companyLogo} alt={currJob.companyName} />
			<h2>{currJob.companyName} </h2>
			<h3>
				Estimated Salary:{" "}
				{fixSalary(
					currJob.annualSalaryMin,
					currJob.annualSalaryMax,
					currJob.salaryCurrency
				)}{" "}
				| Remote From: {currJob.jobGeo}
			</h3>
			<p>
				Job Level: {currJob.jobLevel} | Type: {capitalizeType(currJob.jobType)}{" "}
				| Industry: {fixIndustry(currJob.jobIndustry)}
			</p>
			<p>Published: {readableDate(currJob.pubDate)}</p>
			<div dangerouslySetInnerHTML={{ __html: currJob.jobDescription }}></div>
		</>
	)
}
