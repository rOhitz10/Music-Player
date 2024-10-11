import React from 'react'

function AlbumImg({artwork}) {
 console.log(artwork)
  return (
   

  <div className='w-4/5 flex justify-center items-center relative z-10'>
      <img className='rounded-2xl w-full aspect-square' src={artwork} alt="" srcset="" />
  <div className='h-full w-[90%] absolute bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 -z-10 top-[30px] blur-md'>
  <img className='rounded-2xl w-full aspect-square' src={artwork} alt="" srcset="" />
  </div>
  </div>
     
   
  )
}

export default AlbumImg
