import React from 'react';
import './SongsList.css'
import SongLine from '../SongLine/SongLine';


const SongsList = ({ songs, artistName }) => {
    return (
        <div className='songs-list'>
            <ul className='songs-ordered-list'>
                {songs.map((song, index) => (
                    <li key={index}>
                        <SongLine songData={song} artistName={artistName} num={index} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SongsList;
