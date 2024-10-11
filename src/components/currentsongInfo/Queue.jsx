import React, { useState, useEffect } from 'react';

function Queue({ data }) {
  const [songTitle, setSongTitle] = useState("");

  // useEffect(() => {
    
  //   data.map(song ) => 
      
  //     setSongTitle(data.title); //
    
    
   
  // }, []);

  return (
    <>
      <div className=' bg-gradient-to-r from-indigo-400 to-cyan-400 h-[30%] p-2 rounded-2xl flex flex-col  opacity-80  border-2 border-white overflow-hidden '>
        <h1 className='font-bold text-blue-900 text-lg m-4'>up next</h1>
        {
         data.map(song => {
          return( <div className=' flex flex-wrap mx-5 p-1'>
            <h1 className='text-black font-bold'>{song.title} ..........</h1>
            </div>
          )
         }
        )
        }
      </div>
    </>
  );
}

export default Queue;
