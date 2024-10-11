import { useState } from 'react'
import '../App.css'

import { Routes,Route, Outlet } from 'react-router-dom'
import Player from './player'
import Sidebar from './sidebar'
import Search from './search'


function Home() {


  return (
    <>
    <div className=''>

      <Sidebar/>  
         
      <Search/>
      <Outlet/>
    </div>
     
    </>
  )
}

export default Home
