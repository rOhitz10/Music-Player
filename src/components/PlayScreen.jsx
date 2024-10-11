import { useState,useRef } from "react"
import pause from "../assets/pause.svg"
import play from '../assets/play.svg'
import previous from '../assets/previou.svg'
import next from '../assets/next.svg'
import data from '../assets/data';
import AlbumImg from "./currentsongInfo/albumImg"
import Album from "./currentsongInfo/album"
function PlayScreen() {
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
 <div className="h-[62%]  w-full
  border-2 rounded-2xl flex justify-center items-center flex-col ">
 <AlbumImg artwork={artwork}/>
 <Album  title={title} artist={artist}/>

 </div>
 )
}
export default PlayScreen;