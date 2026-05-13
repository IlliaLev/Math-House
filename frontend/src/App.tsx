import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Problems from "./pages/Problems";
import AllProblems from "./pages/AllProblems";
import TypedProblems from "./pages/TypedProblems";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/problems/:problem_type/:id" element={<Problems />} />
        <Route path="/problems" element={<AllProblems />} />
        <Route path="/problems/:problem_type" element={<TypedProblems />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
