import React from 'react';
import { IoIosPlay } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";
import "./SongLine.css"

const SongLine = ({ songData, artistName }) => {
    return (
        <div className="song-line-container">
            {/* Play button */}
            <button className="play-button">
                CHUJ!
            </button>
            
            <div className="song-info">
                <div>
                    <p className='song-title'>{songData.title}</p>
                    <p className='song-artist'>{artistName}</p>
                </div>
                <div className="right-controls">
                    <button className="addToPlaylist-button">
                        <IoMdAddCircleOutline />
                    </button>
                    <p>{songData.duration}</p>
                </div>
            </div>
        </div>
    );
}

export default SongLine;