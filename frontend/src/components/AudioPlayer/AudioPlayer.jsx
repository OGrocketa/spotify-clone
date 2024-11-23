import {create} from 'zustand';
import { useEffect, useRef, useState } from 'react';
import { fetchSong } from '../../api';


const usePlayer = create((set) => ({
    id: null,
    file_url: "",
    title: "",
    isPlaying: false,
    setPlayerData: (song_data) => set({
        id: song_data.id,
        title: song_data.title,
        file_url: song_data.file_url,
    }),

    setPlay: () => set((state) => ({isPlaying: !state.isPlaying})),

}));

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

    

    useEffect(() => {
        if (audioRef.current && file_url) {
          if (isPlaying) {
            audioRef.current.play();
          } else {
            audioRef.current.pause();
          }
        }
      }, [isPlaying]);
      

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const song_data = await fetchSong(song_id);
                setPlayerData({
                    id: song_data.id,
                    title: song_data.title,
                    file_url: song_data.file_url,
                })

            }catch(error){
                console.error("Error fetching data", error);
            }
        }; 
        fetchData();
       
      }, [song_id]); 
      

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