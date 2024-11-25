import { useEffect, useRef, useState } from 'react';
import usePlayer from '../../hooks/usePlayer';
import usePlayerFetchSong from '../../hooks/usePlayerFetchSong';
import './MusicPlayer.css'
import { FaCirclePause,FaCirclePlay } from "react-icons/fa6";
import usePlayNewSong from '../../hooks/usePlayNewSong';

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
      console.log(curId);
      if(ids[curIndex + 1]){
        const nextSongId = ids[curIndex + 1];
        console.log(nextSongId);
          fetchAndSetSong(nextSongId);
      }
    };

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
            <button onClick={setPlay} className='player-play-pause-button'>
              {isPlaying ? <FaCirclePause size={30}/> :  <FaCirclePlay size={30}/>}
            </button>
            <button onClick={playNext}>CHUJ!</button>
          </div>

          <div className='player-music-add-controls'>
          
          </div>
        
        <audio ref={audioRef} src={file_url}/>
      </div>
    );
    
};

export default MusicPlayer;