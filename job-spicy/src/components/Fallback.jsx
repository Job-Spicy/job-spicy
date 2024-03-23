import { Link } from "react-router-dom"

export const Fallback = () => {
	return (
		<>
			<h1>Not found!</h1>
			<Link to='/job-spicy/' class='nav-link'>
				Go home?
			</Link>
		</>
	)
}
