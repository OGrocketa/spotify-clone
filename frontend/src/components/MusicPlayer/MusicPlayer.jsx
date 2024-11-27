import { useEffect, useRef, useState } from 'react';
import usePlayer from '../../hooks/usePlayer';
import usePlayerFetchSong from '../../hooks/usePlayerFetchSong';
import './MusicPlayer.css'
import { FaCirclePause,FaCirclePlay,FaForwardStep,FaBackwardStep } from "react-icons/fa6";
import usePlayNewSong from '../../hooks/usePlayNewSong';
import MusicSlider from '../Slider/MusicSlider';


const MusicPlayer = () =>{
  const audioRef = useRef();
  
  const{
      ids,
      curId,
      file_url,
      title,
      isPlaying,
      name,
      cover_url,
      setPlayerIds,
      setPlayerSongData,
      setPlay,
  } = usePlayer();

  const fetchAndSetSong = usePlayerFetchSong(); 

  //Handle playback when song changes
  usePlayNewSong(audioRef, file_url, isPlaying);

  //Handle Play Pause
  useEffect(() => {
      if (audioRef.current && file_url) {
        if (isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }
    }, [isPlaying]);

    
    const playNext = () =>{
      
      const curIndex = ids.findIndex((index) => curId == index);
      if(ids[curIndex + 1]){
        const nextSongId = ids[curIndex + 1];
          fetchAndSetSong(nextSongId);
      }
    };

    const playPrev = ()=>{
      const curIndex = ids.findIndex((index) => curId == index);
      if(ids[curIndex - 1]){
        const prevSongId = ids[curIndex - 1];
          fetchAndSetSong(prevSongId);
      }
    };

    // useEffect(()=>{
      
    // },[audioRef.current.currentTime()]);

    return (
      <div className='music-player-container'>
        
          <div className='player-song-info'>
            <img src={cover_url} alt="" />
            <div className="song-title-and-artist-container">
              <span className='song-title'>{title}</span>
              <span className='song-artist'>{name}</span>
            </div>
          </div>

          <div className='music-main-controls'>
            <div className='music-main-controls-buttons'>
              <button onClick={playPrev} className='player-fast-forward'> <FaBackwardStep size={20}/></button>
              <button onClick={setPlay} className='player-play-pause-button'>
                {isPlaying ? <FaCirclePause size={30}/> :  <FaCirclePlay size={30}/>}
              </button>
              <button onClick={playNext} className='player-fast-forward'>
                <FaForwardStep size={20}/> 
              </button>
            </div>
            <MusicSlider/>
          </div>

          <div className='player-music-add-controls'>
          
          </div>
        
        <audio ref={audioRef} src={file_url}/>
      </div>
    );
    
};

export default MusicPlayer;