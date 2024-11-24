import { useEffect, useRef, useState } from 'react';
import usePlayer from '../../hooks/usePlayer';
import usePlayerFetchSong from '../../hooks/usePlayerFetchSong';
import './MusicPlayer.css'

import { FaCirclePause,FaCirclePlay } from "react-icons/fa6";


const MusicPlayer = () =>{
    const audioRef = useRef();
    const song_id = '0e3098e2-9876-11ef-999d-512ce8086d0d';
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
    
    usePlayerFetchSong(song_id);
    

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
         
            <div className='song-info'>
              <img src={cover_url} alt="Album Cover" />
              <div className="song-info-written">
                <p>{title}</p>
                <p>{name}</p>
              </div>
            </div>

            <div className='music-controls'>
              <button onClick={setPlay} className='play-pause-button'>
                {isPlaying ? <FaCirclePause size={30}/> :  <FaCirclePlay size={30}/>}
              </button>
            </div>
           
          
          <audio ref={audioRef} src={file_url}/>
        </div>
      );
      
};

export default MusicPlayer;