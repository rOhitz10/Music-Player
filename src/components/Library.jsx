import React, { useState } from 'react'
import data from '../assets/data';
import Card from './card';
import Sidebar from './sidebar';
import Search from './search';

function Library() {


  
  return (
    <>
      <Sidebar/>
    <div className='screen relative '>
      <div className='h-[10%] fixed w-[100%] bg-[rgb(33, 33, 33)]'>

        <Search/>
      </div>
     
     
        <div className='container flex flex-wrap  justify-around '  >
     
     {data.map(song => (
       
       <Card title={song.title}
             artist={song.artist}
             artwork={song.artwork}
             track={song.tracks}
             url={song.url}
             />
      ))}
      </div> 
      </div> 
  
    </>
  )
}

export default Library
