import { JobsList } from "./JobsList"
import { FilterForm } from "./FilterForm"

export const Home = () => {
	return (
		<>
			<h1>🌶️Job Spicy</h1>
      <FilterForm />
      <h2>Results: <span>(Double click for more detail)</span></h2>
			<JobsList />
		</>
	)
}
