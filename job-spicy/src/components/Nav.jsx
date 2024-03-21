import { NavLink } from "react-router-dom"


export const Nav = () => {
	return (
		<nav id='nav'>
      <p>JobSpicy 🌶️</p>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/favorites">Favorites</NavLink></li>
        <li><NavLink to="/resources">Resources</NavLink></li>
      </ul>
		</nav>
	)
}
