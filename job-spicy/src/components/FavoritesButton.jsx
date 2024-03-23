import JobsContext from "../context/JobsContext"
import { useContext } from "react"

export const FavoritesButton = ({ favoritedAlready, job }) => {
	const { favorites, setFavorites } = useContext(JobsContext)

	const addToFavorites = e => {
		console.log(favoritedAlready)
		setFavorites([...favorites, job])
		console.log(favorites)
		console.log(job)
	}

	const removeFromFavorites = e => {}

	if (favoritedAlready)
		return <button onClick={removeFromFavorites}>Remove From Favorites</button>
	return <button onClick={addToFavorites}>Save to Favorites</button>
}
