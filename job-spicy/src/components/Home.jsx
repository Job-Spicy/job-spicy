import { JobsList } from "./JobsList"
import { FilterForm } from "./FilterForm"

export const Home = () => {
	return (
		<>
			<h1>Job Spicy 🌶️</h1>
			<FilterForm />
			<JobsList />
		</>
	)
}
