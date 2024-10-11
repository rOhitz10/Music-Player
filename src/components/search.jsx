import React from 'react'
import Sidebar from './sidebar'
import data from '../assets/data';
import { useState } from 'react'



function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search input changes
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

   // Filter data based on search query
  const filteredData = data.filter(song =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log();
  
  return (
    <>

     <div className='flex justify-center  '>
    
      <input
        type="text"
        placeholder="Search by title or artist"
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-bar h-8 w-[60%] p-6  font-extrabold font-serif" />
        
        </div>

        
 
    </>
  )
}

export default Search
