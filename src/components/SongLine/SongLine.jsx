import React from 'react';
import { IoIosPlay } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";
import "./SongLine.css"

const SongLine = ({ songData, artistName }) => {
    return (
        <div className="song-line-container">
            <button className="play-button">
                <IoIosPlay />
            </button>
            <div className="song-info">
                <div>
                    <p>{songData.title}</p>
                    <p>{artistName}</p>
                </div>
                <button className="addToPlaylist-button">
                    <IoMdAddCircleOutline />
                </button>
                <p>{songData.duration}</p>
            </div>
        </div>
    );
}

export default SongLine;
