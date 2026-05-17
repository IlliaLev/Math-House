import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TypedIdProblems from "./pages/TypedIdProblems";
import AllProblems from "./pages/AllProblems";
import TypedProblems from "./pages/TypedProblems";
import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/problems/:problem_type/:id" element={<TypedIdProblems />} />
        <Route path="/problems" element={<AllProblems />} />
        <Route path="/problems/:problem_type" element={<TypedProblems />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
