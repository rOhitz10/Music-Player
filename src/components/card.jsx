import previou from "../assets/previou.svg";
import play from "../assets/play.svg";
import next from "../assets/next.svg";
import pause from "../assets/pause.svg"
import { useRef, useState } from "react";
import Sidebar from "./sidebar";



function Card({ title,artwork,artist,url,tracks }) {


  // const [currentTrackindex, setcurrentTrackindex] = useState(0);
  
  
  const audioRef = useRef(null);
  const [audioPlaying, setaudioPlaying] = useState(false);

  // const { title,artwork,artist,url } = song[currentTrackindex];
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
  console.log(tracks);

  const previousTrack = () => {
    setcurrentTrackindex(
      (prevIndex) => {
        (prevIndex - 1 + data.length) % data.length;
      }
    )
  };
  const nextTrack = () => {
    setcurrentTrackindex(
      (prevIndex) => {
        (prevIndex + 1 + data.length) % data.length;
      }
    )
  }



  return (
    <>

    <div className=" card my-4 flex  flex-col gap-4 p-2 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 ">
    
      <img className="img rounded-2xl" src={artwork} alt="" />
      <div className="flex flex-col gap-4 justify-center items-center">
      <h1 className=" " >{title}</h1>
      <p className="  ">{artist}</p>
      <p className="  ">{tracks}</p>
      </div>
      <audio ref={audioRef} src={url} />
      <div class="songbtn ">
        <button onClick={previousTrack}><img src={previou} alt="" /></button>
        <button onClick={playAudio}>
        <img onClick={playAudio} src= {audioPlaying ? pause : play} alt="" />
        </button>
        <button onClick={nextTrack}><img src={next} alt="" /></button>
      </div>
      {/* <div class="playbar invert-0">
        <div class="seekbar">
          <div class="circle">
          </div>
        </div>
      </div> */}
    </div>
    </>
  );
}

export default Card;