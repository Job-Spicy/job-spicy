import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const Nav = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/`)
	}

	return (
		<nav id='nav'>
			<p onClick={handleClick}>🌶️Job Spicy</p>
			<ul>
				<li>
					<NavLink to='/' className='nav-link'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/favorites' className='nav-link'>
						Favorites
					</NavLink>
				</li>
				<li>
					<NavLink to='/resources' className='nav-link'>
						Resources
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
