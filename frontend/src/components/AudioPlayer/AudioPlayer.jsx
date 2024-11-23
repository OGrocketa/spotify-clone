import {create} from 'zustand';
import { useEffect, useRef, useState } from 'react';
import { fetchSong } from '../../api';


const usePlayer = create((set) => ({
    id: null,
    song_url: "",
    title: "",
    isPlaying: false,
    setPlayerData: (song_data) => set({
        id: song_data.id,
        title: song_data.title,
        song_url: song_data.file_url
    }),

    setPlay: () => set((state) => ({isPlaying: !state.isPlaying})),

}));

const MusicPlayer = () =>{
    const audioRef = useRef(null);
    const song_id = '0e30dd2a-9876-11ef-999d-512ce8086d0d';
    const{
        id,
        song_url,
        title,
        isPlaying,
        setPlayerData,
        setPlay,
    } = usePlayer();

    

    useEffect(() => {
        if (audioRef.current) {
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
                    song_url: song_data.file_url,
                })
            }catch(error){
                console.error("Error fetching data", error);
            }
        }; 
        fetchData();
       
      }, [song_id, setPlayerData]); 
      

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
          <audio ref={audioRef} src={son}/>
        </div>
      );
      
};

export default MusicPlayer;