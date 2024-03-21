import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Nav } from "./components/Nav"
import { Home } from "./components/Home";
import { Fallback } from "./components/Fallback";
import { JobDetails } from "./components/JobDetails";
import { Resources } from "./components/Resources";
import { Favorites } from "./components/Favorites";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/jobs/:id' element={<JobDetails />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='*' element={<Fallback />} />
        </Routes>
      </main>
    </>
  );
}

export default App
