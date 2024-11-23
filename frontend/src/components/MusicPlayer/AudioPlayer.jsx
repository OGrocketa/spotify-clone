import { useEffect, useRef, useState } from 'react';
import usePlayer from '../../hooks/usePlayer';
import usePlayerFetchSong from '../../hooks/usePlayerFetchSong';

const MusicPlayer = () =>{
    const audioRef = useRef();
    const song_id = '0e3098e2-9876-11ef-999d-512ce8086d0d';
    const{
        id,
        file_url,
        title,
        isPlaying,
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
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h2>{title || "Loading song..."}</h2>
          <div>
            <button
              onClick={setPlay} 
              style={{ padding: "10px 20px", fontSize: "16px" }}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
          <audio ref={audioRef} src={file_url}/>
        </div>
      );
      
};

export default MusicPlayer;