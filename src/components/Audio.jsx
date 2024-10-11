import React, { useRef, useState } from 'react'
import ProgressDisk from './AudioContent/ProgressDisk';
// import WaveAnimation from './AudioContent/WaveAnimation';
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { FaRegPauseCircle } from "react-icons/fa";

function Audio({data}) {

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

const previousTrack = () => {
  setcurrentTrackindex(
    (prevIndex) => {
      
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

 console.log(title);
 
  return (
    <div className='w-full h-[45%] flex m-[3%] '>

     <div className='w-[37%]'><ProgressDisk percentage={75} audioPlaying={true} img={artwork} size={250} color='#c98950'/> </div>

     <div className='w-[63%] flex flex-col justify-between items-center'>
      <p className='text-blue-300 text-center text-2xl font-extrabold overflow-hidden text-ellipsis  '>{ title}</p>
      <p className=' text-blue-100 text-[16px] font-semibold'>{artist}</p>
      <div className=" flex items-center flex-col w-full">
          {/* <div className="w-[50%] flex justify-between mb-24 items-center">
            <p className="duration ">0:00</p>
            <WaveAnimation isPlaying={audioPlaying} />
            <p className="duration">0:30</p>
          </div> */}

          <audio ref={audioRef} src={url} />
     <div class="songbtn flex justify-center">
        <button onClick={previousTrack}><IoPlaySkipBack className='w-12 h-12 fill-white' /></button>
        <button onClick={playAudio}>
      {audioPlaying ? <FaRegPauseCircle className='w-20 h-20 fill-white stroke-white'/>: <IoPlayCircleOutline className='w-28 h-28 fill-white stroke-white'/>} 
        </button>
        <button onClick={nextTrack}><IoPlaySkipForward className='w-12 h-12 fill-white'/> </button>
      </div>

     
        </div>
     </div>
     
    </div>
  )
}

export default Audio
