import { useContext } from "react"
import JobsContext from "../context/JobsContext"
import {
	geoLocations,
	industries,
	industryOutliers,
} from "../utils/industries-and-locations"

export const FilterForm = () => {
	const {
		setURL,
		geo,
		setGeo,
		tag,
		setTag,
		industry,
		setIndustry,
		count,
		setCount,
	} = useContext(JobsContext)

	const locationOptions = geoLocations.map(location => (
		<option value={location.toLowerCase()} key={location}>
			{location}
		</option>
	))
	//Türkiye is passed thru as turkiye.
	// location === "Turkiye" ? "Türkiye" : location
	// this works but when you're searching for it it doesn't work unless you type 'ü'

	// on submission lowercase and omit value if "any" is chosen
	const industryOptions = industries.map(currIndustry => (
		<option value={currIndustry.toLowerCase()} key={currIndustry}>
			{industryOutliers[currIndustry]
				? industryOutliers[currIndustry]
				: currIndustry}
		</option>
	))

	const handleSubmit = e => {
		e.preventDefault()
		console.log({ industry, count, geo, tag })
		let newURL = "https://jobicy.com/api/v2/remote-jobs?"
		if (count) newURL += `count=${count}&`
		if (geo) newURL += `geo=${geo.replaceAll(" ", "-")}&` // space handling
		if (industry) newURL += `industry=${industry.replaceAll(" ", "-")}&`
		if (tag) newURL += `tag=${tag.replaceAll(" ", "+")}&` // space handling

		newURL.at(-1) === "&" ? setURL(newURL.slice(0, -1)) : setURL(newURL)
		console.log(newURL)
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Find Remote Jobs!</h2>

			<label htmlFor='tag-search'>Search by keyword: </label>
			<input
				type='text'
				id='tag-search'
				onChange={e => setTag(e.target.value)}
			/>

			<label htmlFor='locations'> Based in: </label>
			<input
				list='location-select'
				id='locations'
				onChange={e => setGeo(e.target.value)}
				placeholder='Anywhere'
			/>
			<datalist id='location-select'>
				<option value='' key='any'>
					Anywhere
				</option>
				{locationOptions}
			</datalist>

			<label htmlFor='indstries'> Industry: </label>
			<input
				list='industry-select'
				id='industries'
				onChange={e => setIndustry(e.target.value)}
				placeholder='Any'
			/>
			<datalist id='industry-select'>
				<option value='' key='any'>
					Any
				</option>
				{industryOptions}
			</datalist>

			<label htmlFor='job-count'> Count: </label>
			<input
				type='number'
				min='1'
				max='50'
				id='job-count'
				placeholder='1-50 (default: 50)'
				onChange={e => setCount(e.target.value)}
			/>

			<button>Search</button>
		</form>
	)
}
