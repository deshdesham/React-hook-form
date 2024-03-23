import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider } from "react-router-dom";

import Root from "./component/Root";
import Home from "./pages/Home";
import About from "./pages/About";

const router=(
  createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
      </Route>
    )
  )
)

function App() {
  return (
   <RouterProvider router={router}/>
  )
}

export default App;
