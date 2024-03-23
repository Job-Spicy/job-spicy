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
		if (geo) newURL += `geo=${geo.replaceAll(" ", "-")}&` 
		if (industry) newURL += `industry=${industry.replaceAll(" ", "-")}&`
		if (tag) newURL += `tag=${tag.replaceAll(" ", "+")}&`

		newURL.at(-1) === "&" ? setURL(newURL.slice(0, -1)) : setURL(newURL)
		console.log(newURL)
	}

	return (
		<form onSubmit={handleSubmit} aria-labelledby="form-heading">
			<h2 id='form-heading'>Find Remote Jobs!</h2>
			<hr></hr>
			<div id='actual-form'>
				<div id='text-input'>
					<label htmlFor='tag-search'>Search by keyword:</label>
					<input
						type='text'
						id='tag-search'
						onChange={e => setTag(e.target.value)}
						placeholder='Ex. Python, Excel, etc.'
						className='form-input'
					/>
				</div>

				<div id='fixed-inputs'>
					<div className='fixed-input'>
						<label htmlFor='locations'>Based in:</label>
						<input
							list='location-select'
							id='locations'
							onChange={e => setGeo(e.target.value)}
							placeholder='Anywhere'
							className='form-input'
						/>
						<datalist id='location-select'>
							<option value='' key='any'>
								Anywhere
							</option>
							{locationOptions}
						</datalist>
					</div>

					<div className='fixed-input'>
						<label htmlFor='indstries'>Industry:</label>
						<input
							list='industry-select'
							id='industries'
							onChange={e => setIndustry(e.target.value)}
							placeholder='Any'
							className='form-input'
						/>
						<datalist id='industry-select'>
							<option value='' key='any'>
								Any
							</option>
							{industryOptions}
						</datalist>
					</div>

					<div className='fixed-input'>
						<label htmlFor='job-count'>Count:</label>
						<input
							type='number'
							min='1'
							max='50'
							id='job-count'
							placeholder='1-50 (default: 50)'
							onChange={e => setCount(e.target.value)}
							className='form-input'
						/>
					</div>
				</div>

				<button>Search</button>
			</div>
			<hr></hr>
		</form>
	)
}
