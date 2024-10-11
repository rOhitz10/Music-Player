import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import Search from './search'
import { useSearchParams } from 'react-router-dom'

function Favorite() {




  return (
    <>
      <Sidebar/>
      <div className='screen'>
        <Search/>
      favourite
      </div>
      
    </>
  )
}

export default Favorite
