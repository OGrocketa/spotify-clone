import { useState } from "react";
import "./PlayerBar.css"

function PlayerBar(){

    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(10);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    }


    const handleProgressChange = (event) => {
        setProgress(event.target.value); 
    };


    return(
        <>
            <div className="player-bar">

                <div className="song-info">
                    <img className= "album-cover" src="" alt="Song cover" />
                    <div className="song-details">
                        <p className="song-title">Song name</p>
                        <p className="song-artist">Artist Name</p>
                    </div>
                </div>
                <div className="player-control-and-progress-bar">
                    <div className="player-controls">
                        <button className="prev-button">⏮</button>
                        <button className="play-pause-button" onClick={togglePlayPause}> {isPlaying ?'⏸' : '▶️' }</button>
                        <button className="next-button">⏭</button>
                    </div>

                    <div className="song-progress">
                        <p>0:15</p>
                        <input className= "playback-progress-bar"
                            type="range"
                            min={0}
                            max={100}
                            value={10}
                            onChange={handleProgressChange}
                        />
                        <p>2:25</p>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default PlayerBar