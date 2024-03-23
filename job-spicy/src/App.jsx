import "./css/App.css"
import { Route, Routes } from "react-router-dom"
import { Nav } from "./components/Nav"
import { Home } from "./components/Home"
import { Fallback } from "./components/Fallback"
import { JobDetails } from "./components/JobDetails"
import { Favorites } from "./components/Favorites"

function App() {
	return (
		<>
			<Nav />
			<main>
				<Routes>
					<Route path='/job-spicy/' element={<Home />} />
					<Route path='/job-spicy/jobs/:id' element={<JobDetails />} />
					<Route path='/job-spicy/favorites' element={<Favorites />} />
					<Route path='*' element={<Fallback />} />
				</Routes>
			</main>
		</>
	)
}

export default App
