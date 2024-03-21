import { useState, useEffect } from "react"
import JobsContext from "./JobsContext"
import { fetchData } from "../utils/fetchData"
// import fetch function here

const JobsProvider = ({ children }) => {
  // example job object
	const testJobs = {
		id: 101514,
		url: "https://jobicy.com/jobs/101514-senior-frontend-engineer-4",
		jobTitle: "Senior Frontend Engineer",
		companyName: "Toggl Hire",
		companyLogo:
			"https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/10/775426f314099f3ef92461d13b1cdadb.jpg",
		jobIndustry: ["Software Engineering"],
		jobType: ["full-time"],
		jobGeo: "Anywhere",
		jobLevel: "Senior",
		jobExcerpt:
			"We are looking for passionate and sharp Senior Frontend Engineers who bring unique skills to different aspects of our business. Based on your expertise and interests, you might join our Frontend Core team, which is centered around grasping project requirements and converting them into intuitive, web-based components. Alternatively, you could be part of our Customer Success team,&#8230;",
		// the excerpt needs to be trimmed, there's the same nonsense string at the end of each one &#8230;
		jobDescription:
			'<div class="css-5uclfi-TextSection e1489ptn4">\n<p class="css-1oegatj-P3 e6bq8xs5">We are looking for passionate and sharp Senior Frontend Engineers who bring unique skills to different aspects of our business.</p>\n<p class="css-1oegatj-P3 e6bq8xs5">Based on your expertise and interests, you might join our <strong class="css-bcngxs-Strong e6bq8xs2">Frontend Core team</strong>, which is centered around grasping project requirements and converting them into intuitive, web-based components. Alternatively, you could be part of our <strong class="css-bcngxs-Strong e6bq8xs2">Customer Success team</strong>, where your role will involve collaborating directly with customers to create custom solutions, combining cross-discipline FE proficiency with customer interaction skills.</p>\n<p class="css-1oegatj-P3 e6bq8xs5">The salary for this position is <strong class="css-bcngxs-Strong e6bq8xs2">€72,000</strong> annually.</p>\n<p class="css-1oegatj-P3 e6bq8xs5">You can work <strong class="css-bcngxs-Strong e6bq8xs2">from anywhere in the world as long as your main location is between UTC-4 and UTC+8:00.</strong></p>\n</div>\n<div class="css-5uclfi-TextSection e1489ptn4">\n<h2 class="css-foef1g-H4 e6bq8xs9">About the team</h2>\n<p class="css-1oegatj-P3 e6bq8xs5">We are a global team of 100+ awesome people working from over 40 countries around the globe. We hire globally, you work locally — in the heart of London, a beach outside of São Paulo, or a quiet village near Florence, the choice is yours. Every few months we travel to meet up somewhere in the world and spend some quality time together. We place a huge amount of trust in our people, and we measure the outcomes rather than the work itself. Our values fuel our results.</p>\n</div>\n<div id="job-description" class="css-5uclfi-TextSection e1489ptn4">\n<h2 class="css-foef1g-H4 e6bq8xs9">The role</h2>\n<p class="css-1oegatj-P3 e6bq8xs5">As a Senior Frontend Engineer, you will play a critical role in taking ownership of major projects, using React, JavaScript, TypeScript, HTML and CSS to code impressive features, like slick and fast data visualizations that translate our data into meaningful insights</p>\n<p class="css-1oegatj-P3 e6bq8xs5"><strong class="css-bcngxs-Strong e6bq8xs2">Our team meetings are scheduled between 11:00 and 16:00 UTC.</strong> Your availability and commitment to participate in these sessions are essential for effective collaboration and team alignment.</p>\n<h2 class="css-1oegatj-P3 e6bq8xs5">Your main responsibilities will be</h2>\n<ul class="css-lcbc3d-Ul e7tl8dc2">\n<li class="css-1aakq9v-Li e7tl8dc1">Work closely with other engineers, product managers and designers to understand requirements and translate them into user-friendly web-based components</li>\n<li class="css-1aakq9v-Li e7tl8dc1">Develop and maintain scalable data visualizations using modern frontend technologies such as React and Nivo</li>\n<li class="css-1aakq9v-Li e7tl8dc1">Optimize frontend performance to ensure fast rendering and smooth interactions for high data volumes</li>\n<li class="css-1aakq9v-Li e7tl8dc1">Conduct code reviews, identify and resolve technical issues, and maintain high coding standards</li>\n<li class="css-1aakq9v-Li e7tl8dc1">Collaborate with other development teams to identify and implement best practices in frontend development and related areas</li>\n</ul>\n</div>\n<div id="job-requirements" class="css-5uclfi-TextSection e1489ptn4">\n<h2 class="css-foef1g-H4 e6bq8xs9">About you</h2>\n<p class="css-1oegatj-P3 e6bq8xs5">We would love to hear from you if you have significant experience in frontend development and can lead major development projects. Our search spans across various internal domains, and <strong class="css-bcngxs-Strong e6bq8xs2">you are not expected to tick every box on our list</strong>. We value a diverse skill set and welcome engineers who, based on their passion, expertise, and willingness to learn, can contribute to either our core or Customer Success roles.</p>\n<p class="css-1oegatj-P3 e6bq8xs5">In particular, we are looking for:</p>\n<ul class="css-lcbc3d-Ul e7tl8dc2">\n<li class="css-1aakq9v-Li e7tl8dc1"><strong class="css-bcngxs-Strong e6bq8xs2">Specifically for the CS role, availability to handle customer calls during US time zone working hours when needed</strong>, as we are committed to providing the same level of service to our US customers as we do for those in the EU</li>\n<li class="css-1aakq9v-Li e7tl8dc1">Extensive knowledge about JavaScript and React, and preferably Redux and a side effect managing library like Redux-Saga</li>\n<li class="css-1aakq9v-Li e7tl8dc1">Demonstrated experience leading large development projects, with good organization skills and the ability to plan well-structured projects, estimate tasks, manage stakeholders and coordinate with other cross-functional teams</li>\n<li class="css-1aakq9v-Li e7tl8dc1">A knack for data visualizations, with some familiarity of its principles and best practices</li>\n<li class="css-1aakq9v-Li e7tl8dc1">Knowledge about testing frameworks, like Jest</li>\n<li class="css-1aakq9v-Li e7tl8dc1">Excellent communication and collaboration skills, with the ability to work in a remote team environment</li>\n<li class="css-1aakq9v-Li e7tl8dc1">Strong problem-solving skills, attention to detail, and ability to work independently</li>\n<li class="css-1aakq9v-Li e7tl8dc1">Full-stack experience</li>\n<li class="css-1aakq9v-Li e7tl8dc1">Eagerness to contribute to the engineering team&#8217;s growth, including interviewing and mentoring junior engineers, and providing precise, actionable feedback to peers.</li>\n<li class="css-1aakq9v-Li e7tl8dc1">Proficiency in the English language, both written and verbal, is required for success in a remote and largely asynchronous work environment</li>\n</ul>\n</div>\n<div id="benefits" class="css-5uclfi-TextSection e1489ptn4">\n<h2 class="css-foef1g-H4 e6bq8xs9">Benefits</h2>\n<ul>\n<li>Freedom to choose when and how much you work—we only measure results</li>\n<li>24 days of paid time off a year, plus your local holidays</li>\n<li>In-person meetups for team-building (expenses covered)</li>\n<li>4-6 weeks paid sabbatical (depending on tenure)</li>\n<li>Laptop budget up to 2,500€ and it renews every 3 years</li>\n<li>€2,000 budget to set up your home office and an additional €300 every year after 3 years of tenure</li>\n<li>€250 per month for co-working space membership and/or internet service at home</li>\n<li>€4,000 per year contribution to use for training, workshops, and conferences</li>\n<li>€2,000 per year contribution for any equipment or services to improve and/or maintain your physical and mental health</li>\n<li>Support for buying tools you need for doing your best work (even eyeglasses if you need a new pair)</li>\n</ul>\n</div>',
		// go to JobDetails.jsx to see how i rendered this :)
		pubDate: "2024-03-19 08:36:11",
		// could you make the time less ugly lol
		annualSalaryMin: "72000",
		annualSalaryMax: "",
		salaryCurrency: "EUR",
	}

	const [jobs, setJobs] = useState([])
	const [url, setURL] = useState("https://jobicy.com/api/v2/remote-jobs")

  // form stuff
	const [geo, setGeo] = useState("")
	const [count, setCount] = useState("50")
	const [industry, setIndustry] = useState("")
  const [tag, setTag] = useState("")
  
  const [favorites, setFavorites] = useState([testJobs])

	useEffect(() => {
		const doFetch = async () => {
			const [data, error] = await fetchData(url)
			if (data) setJobs(data.jobs)
			if (error) setError(error)
		}
		doFetch()
  }, [url])
  
  useEffect(() => {
    // write to `localStorage`
    console.log('added to favorites!')
  }, [favorites])

	const contextValues = {
		jobs,
		url,
		setURL,
		geo,
		setGeo,
		industry,
		setIndustry,
		count,
		setCount,
		tag,
    setTag,
    favorites,
	}

	return (
		<JobsContext.Provider value={contextValues}>
			{children}
		</JobsContext.Provider>
	)
}

export default JobsProvider
