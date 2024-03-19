import { useNavigate } from "react-router-dom"

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
    <p>{job.jobExcerpt}</p>
    <p>{job.jobGeo} | {job.jobType} | {job.jobLevel} | Estimated Salary: {job.annualSalaryMin}{job.annualSalaryMax}{job.salaryCurrency}</p>
    <p>Published: { job.pubDate}</p>
  </div>
  )
}