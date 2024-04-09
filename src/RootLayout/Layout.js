import React from 'react'
import Navlink from './Navlink';
import { Outlet } from 'react-router-dom';
import Footer from "./Footer"
const Layout = () => {


  return (
    <div>
        <Navlink/>
        <main>
    
            <Outlet/>
        </main>
        <Footer/>
        
        </div>
  )
}

export default Layout;