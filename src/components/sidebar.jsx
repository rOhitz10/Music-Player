import React from 'react'
import '../App.css'

import { MdFavorite } from "react-icons/md";
import { MdOutlinePlaylistAddCircle } from "react-icons/md";
import { GiPoisonGas } from "react-icons/gi";
import { MdLibraryMusic } from "react-icons/md";
import { BsMusicPlayer } from "react-icons/bs";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

function sidebar() {
  return (
   <>
   <div className='fixed'>

  <div className='sidebar flex flex-col items-center   justify-between bg-white w-[100px] h-screen rounded-2xl'>
     <Link to='/'> <img className='w-16 h-16 my-6 rounded-full' src="https://cdnb.artstation.com/p/assets/images/images/026/142/657/large/sleepy-jhin-roronoa-zoro-portrait.jpg?1587999560" alt="" srcset="" />
    </Link>
    <div className=' flex flex-col gap-9 font-bold ' >
      
   <Link to='/trending'> <button ><GiPoisonGas className='w-7 h-7'/><h2>Trending</h2></button> </Link>
    <Link to='/favorites'><button><MdFavorite className='w-7 h-7'/><h2>Favorite</h2></button></Link>
   
    <Link to='/library' >
    <button ><MdLibraryMusic className='w-7 h-7' /><h2  className=''>Library</h2></button>
    </Link>
    <Link to='/:id'><button><BsMusicPlayer className='w-7 h-7'/><h2>Player</h2></button></Link>
    </div>
    <button className='my-5'><LiaSignOutAltSolid className='w-8 h-8'/><h1 className='font-bold'>Sign Out</h1></button>
    </div>
   </div>
   </>
  )
}

export default sidebar
