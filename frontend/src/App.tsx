import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Problems from "./pages/Problems";
import AllProblems from "./pages/AllProblems";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/problems/:problem_type/:id" element={<Problems />} />
        <Route path="/problems" element={<AllProblems />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
