import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const Nav = () => {
	const navigate = useNavigate()

	const handleClick = () => {
    navigate('/job-spicy/')
	}

	return (
		<nav id='nav'>
			<p onClick={handleClick}>🌶️Job Spicy</p>
			<ul>
				<li>
					<NavLink to='/job-spicy/' className='nav-link' activeClassName='nav-active'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/job-spicy/favorites' className='nav-link' activeClassName='nav-active'>
						Favorites
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
