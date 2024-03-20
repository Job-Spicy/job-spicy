import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Nav } from "./components/Nav"
import { Home } from "./components/Home";
import { Fallback } from "./components/Fallback";
import { JobDetails } from "./components/JobDetails";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobs/:id' element={<JobDetails />} />
        <Route path='*' element={ <Fallback /> } />
      </Routes>
    </>
  );
}

export default App
