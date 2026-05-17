import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import TypedIdProblems from "./pages/TypedIdProblems";
import AllProblems from "./pages/AllProblems";
import TypedProblems from "./pages/TypedProblems";
import NotFound from "./pages/NotFound";
import Layout from "./Layout";
import "./styles/style.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home />},
        { path: "/problems", element: <AllProblems />},
        { path: "/problems/:problem_type", element: <TypedProblems />},
        { path: "/problems/:problem_type/:id", element: <TypedIdProblems />}
      ]
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
