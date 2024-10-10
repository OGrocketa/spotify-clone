import React from 'react';
import './SongsList.css'
import SongLine from '../SongLine/SongLine';


const SongsList = ({ songs, artistName }) => {
    return (
        <div className='songs-list'>
            <ol className='songs-ordered-list'>
                {songs.map((song, index) => (
                    <li key={index}>
                        <SongLine songData={song} artistName={artistName} />
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default SongsList;
