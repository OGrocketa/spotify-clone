import { useEffect, useState } from "react";
import "./SongProfile.css"

const SongProfilePage = ({ songTitle }) => {

    const [songData, setSongData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/song/${songTitle}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok'); // Check for response errors
                }
                return res.json();
            })
            .then(data => setSongData(data))
            .catch(err => setError(err.message)); 
    }, [songTitle]);


    if (error) return <div>{error}</div>;
    if (!songData) return <div>Loading...</div>;
    return (
        <div className="song-profile">

            <div className="album-cover">
                <img src={songData.albumCover}/>
            </div>
    
            <div className="song-info">
                <h1>{songData.song.title}</h1>
                <h2>{songData.artistId}</h2>
                <p>Album: {songData.albumName}</p>
                <p>Duration: {songData.song.duration}</p>
            </div>
        </div>
        );
    }

export default SongProfilePage