import React, { useEffect, useState } from 'react';
import songContext from './songContext';


function MusicFetch() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


useEffect(() => {

  fetch("https://dummyjson.com/c/57d6-b753-4c02-af63")
  
  .then((res) => {
        if (!res) {
          throw new Error('Failed to fetch music data');
        }
        return res.json();
      })
      .then((result) => {
        setSongs(result); 
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false)
        console.error(error);
      });
  }, []);

  // Loading state
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Error state
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  
  return (
   <>
   <songContext songs={songs}/>
   </>
  );
}

export default MusicFetch;

