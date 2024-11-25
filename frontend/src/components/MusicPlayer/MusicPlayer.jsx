import { useEffect, useRef, useState } from 'react';
import usePlayer from '../../hooks/usePlayer';
import usePlayerFetchSong from '../../hooks/usePlayerFetchSong';
import './MusicPlayer.css'
import { FaCirclePause,FaCirclePlay } from "react-icons/fa6";


const MusicPlayer = () =>{
  const audioRef = useRef();
  
  const{
      id,
      file_url,
      title,
      isPlaying,
      name,
      cover_url,
      setPlayerData,
      setPlay,
  } = usePlayer();

  const handlePlaySong = (song_id)=>{
    usePlayerFetchSong(song_id);
  }
  
  useEffect(() => {
    if (audioRef.current && file_url) {
        audioRef.current.pause(); // Pause current playback
        audioRef.current.load(); // Reload the audio element with the new source
        if (isPlaying) {
            audioRef.current.play(); // Start playback for the new song
        }
    }
  }, [file_url]); 
  

  useEffect(() => {
      if (audioRef.current && file_url) {
        if (isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }
    }, [isPlaying]);

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
          </div>

          <div className='player-music-add-controls'>
          
          </div>
        
        <audio ref={audioRef} src={file_url}/>
      </div>
    );
    
};

export default MusicPlayer;