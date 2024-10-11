import React, { useRef, useState } from 'react'

const songContext = React.createContext();
export default songContext;

function Contextprovider({children}) {


 return <songContext.Provider >
  {children}
  </songContext.Provider>
}

export {Contextprovider}

// function songContext( {songs} ) {

//  const [currentTrackindex, setcurrentTrackindex] = useState(0);
  
//  const audioRef = useRef(null);
//  const [audioPlaying, setaudioPlaying] = useState(false);

//  const { title,artwork,artist,url } = songs[currentTrackindex];
//  const playAudio = () => {
//    if (!audioPlaying) {
//      audioRef.current.play();
//      setaudioPlaying(true)
//    }
//    else {
//      audioRef.current.pause();
//      setaudioPlaying(false)
//    }
//  };

//  const previousTrack = () => {
//    setcurrentTrackindex(
//      (prevIndex) => {
//        (prevIndex - 1 + data.length) % data.length;
//      }
//    )
//  };
//  const nextTrack = () => {
//    setcurrentTrackindex(
//      (prevIndex) => {
//        (prevIndex + 1 + data.length) % data.length;
//      }
//    )
//  }

// console.log(title)
//   return (
//     <div>
      
//     </div>
//   )
// }


