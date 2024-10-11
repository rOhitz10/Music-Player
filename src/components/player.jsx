import React, { useEffect, useRef, useState } from 'react'
import data from '../assets/data';
import { useParams } from 'react-router-dom';
import Sidebar from './sidebar';
import Queue from './currentsongInfo/Queue';
import PlayScreen from './PlayScreen';
import Audio from './Audio';

function Player() {
  const [currentTrackindex, setcurrentTrackindex] = useState(0);

  
  const audioRef = useRef(null);
  const [audioPlaying, setaudioPlaying] = useState(false);

  const {url,artwork,artist,title}=data[currentTrackindex];

 const playAudio = () => {
   if (!audioPlaying) {
     audioRef.current.play();
     setaudioPlaying(true)
   }
   else {
     audioRef.current.pause();
     setaudioPlaying(false)
   }

 };
 console.log(currentTrackindex);

 

const previousTrack = () => {
  setcurrentTrackindex(
    (prevIndex) => {
      
      console.log(audioPlaying);
      
      return (prevIndex - 1 + data.length) % data.length;
    }
  )
};
const nextTrack = () => {
  setcurrentTrackindex(
    (prevIndex) => {
      return (prevIndex + 1) % data.length;
    }
  )
}


  
  return (
    <>
      <Sidebar/>
    <div className='screen flex '>
<div className='w-[68%] h-full mr-3'><Audio data={data[currentTrackindex]}/></div>

<div className=' w-2/6 h-full flex flex-col justify-between'>

<PlayScreen />
<Queue data={data}/>

</div>
    </div>
    </>
  )
}

export default Player




// const{ id }= useParams();
  
// // console.log(id);

// const [page,setPage]=useState(null);

// useEffect(() => {
//   const song = data.find((item) => item.id === id);
//   if (song) {
//     setPage(song);
//   }
//   else{
    
//   }
// },[id])