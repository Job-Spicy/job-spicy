import { useParams } from "react-router-dom"
import { useContext } from "react"
import JobsContext from "../context/JobsContext"
//import { Fallback } from "./Fallback"
// i think this import is unnecessary but it was in the robot assignment, we'll see!

export const JobDetails = () => {
	//individual page for jobs once they've been clicked on
	const { jobs } = useContext(JobsContext)
	const { id } = useParams()

	const selectedJob = jobs.find(job => job.id === parseInt(id))
	// if (!job) return <Fallback />
	// i think this line is unnecessary but AGAIN it was in the robo assignment 🤖

	// you know the vibes. all the stuff here is just placeholders. move
	// it around however you want.
	return (
		<>
			<h1> {selectedJob.jobTitle} </h1>
			<h2>{selectedJob.companyName} </h2>
			<h3>
				Type: {selectedJob.jobType} | Estimated Salary({selectedJob.salaryCurrency}):
        {selectedJob.annualSalaryMin} - {selectedJob.annualSalaryMax} | Remote From: {selectedJob.jobGeo}
      </h3>
      <p>Job Level: {selectedJob.jobLevel} | Industry: {selectedJob.jobIndustry} | Posted: {selectedJob.pubDate }</p>
      <p></p>
			<div
				dangerouslySetInnerHTML={{ __html: selectedJob.jobDescription }}
			></div>
		</>
	)
}
