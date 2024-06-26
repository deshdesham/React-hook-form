import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './RootLayout/Layout';
import About from "./pages/About"
import Home from "./pages/Home"
import Error from './pages/Error';
import ReactForm from './pages/React_Form'; // Rename React_Form to ReactForm


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route index element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/reactform' element={<ReactForm/>} /> {/* Updated component name */}
      <Route path='*' element={<Error/>} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
