import React from 'react'
import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'
import Player from './components/player'
import Trending from './components/Trending'
import Favorite from './components/Favorite'
import Library from './components/Library'

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:id' element={<Player/>}/>
      <Route path='/trending' element={<Trending/>}/>
      <Route path='/favorites' element={<Favorite/>}/>
      <Route path='/library' element={<Library/>}/>
     </Routes>
     
    </div>
  )
}


export default App
