import React from 'react'
import { Outlet } from 'react-router';
import Navlink from "./Navlink"
import Footer from "./Footer"

const Root = () => {
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

export default Root;