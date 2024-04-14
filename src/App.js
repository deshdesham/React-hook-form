import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './RootLayout/Layout';
import About from "./pages/About"
import Home from "./pages/Home"
import Error from './pages/Error';
import ReactForm from './pages/React_Form'; // Rename React_Form to ReactForm
import ReactHookForm from './pages/ReactHookForm';
import RhookFWComp from './pages/RhookFWComp';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route index element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/reactform' element={<ReactForm/>} />
      <Route path='/reacthookform' element={<ReactHookForm/>} />
      <Route path='/reacthookformwithcomponent' element={<RhookFWComp/>} />
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
