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

    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0);

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

      const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
      };

      const handleLoadSong = () => {
        setDuration(audioRef.current.duration);
      };

      const handleUserSliderChange = (value) =>{
        const newTime = value[0];
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);

      }

      const handleSongEndedPlayNext = () =>{
        if(audioRef.current.ended){
          playNext();
        }
      }

      const convertTimeFromSec = (seconds) => {
        const secondsRounded = Math.round(seconds);
        let minutes = Math.floor(secondsRounded / 60);
        minutes = minutes < 10 ? `${minutes}` : minutes;
        let modSeconds = secondsRounded % 60;
        modSeconds = modSeconds < 10 ? `0${modSeconds}` : modSeconds;
        return `${minutes}:${modSeconds}`;
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
              <div className='music-main-controls-buttons'>
                <button onClick={playPrev} className='player-fast-forward'> <FaBackwardStep size={20}/></button>
                <button onClick={setPlay} className='player-play-pause-button'>
                  {isPlaying ? <FaCirclePause size={30}/> :  <FaCirclePlay size={30}/>}
                </button>
                <button onClick={playNext} className='player-fast-forward'>
                  <FaForwardStep size={20}/> 
                </button>
              </div>
              <div className='music-slider-container'>
                <p>{convertTimeFromSec(currentTime)}</p>
                <MusicSlider currentTime={currentTime} duration={duration} onValueChange={handleUserSliderChange}/>
                <p>{convertTimeFromSec(duration)}</p>
              </div>
            
            </div>

            <div className='player-music-add-controls'>
            
            </div>
          
          <audio ref={audioRef} src={file_url} onLoadedMetadata={handleLoadSong} onTimeUpdate={handleTimeUpdate} onEnded={handleSongEndedPlayNext}/>
        </div>
      );
      
  };

  export default MusicPlayer;