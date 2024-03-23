import JobsContext from "../context/JobsContext"
import { useContext } from "react"

export const FavoritesButton = ({ job }) => {
	const { favorites, setFavorites } = useContext(JobsContext)

	const addToFavorites = () => {
		setFavorites([...favorites, job])
	}

	const removeFromFavorites = () => {
		const removedJob = favorites.indexOf(job)
		const newFavorites = [...favorites]
		newFavorites.splice(removedJob, 1)
		setFavorites([...newFavorites])
	}

	if (favorites.find(currJob => currJob.id === job.id))
		return (
			<button
        onClick={removeFromFavorites}
				className='remove-button'
			>
				Remove From Favorites
			</button>
		)
	return (
		<button
			onClick={addToFavorites}
		>
			Save to Favorites
		</button>
	)
}
