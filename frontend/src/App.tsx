import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Problems from "./pages/Problems";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/problems/:problem_type/:id" element={<Problems />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
