import React from 'react';
import './SongsList.css';
import SongLine from '../SongLine/SongLine';


const SongsList = ({ songs, artistName, limit }) => {
    const displayedSongs = limit ? songs.slice(0, limit) : songs;

    return (
        <div className='songs-list'>
            <ul className='songs-ordered-list'>
                {displayedSongs.map((song, index) => (
                    <li key={index}>
                        
                        <SongLine song={song} artistName={artistName} num={index} songs={songs}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SongsList;
