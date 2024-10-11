import React, { useState } from 'react';
import { IoIosPlay } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";
import "./SongLine.css"

const SongLine = ({ songData, artistName ,num}) => {
    const [hover, setHover] = useState(false);
    
    return (
        <div className="song-line-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >

            <div className="song-info">
                <div className='index-play-container'>
                    {hover ? 
                        (<button > <IoIosPlay size={20}/> </button>)
                        :
                        (<div className="song-index">{num + 1}</div>)
                    }
                </div>
                
                <div className='song-title-and-artist-container'>
                    <p className='song-title'>{songData.title}</p>
                    <p className='song-artist'>{artistName}</p>
                </div>
                <div className="right-controls">
                    <button className="addToPlaylist-button">
                        <IoMdAddCircleOutline size={20} />
                    </button>
                    <p>{songData.duration}</p>
                </div>
            </div>
        </div>
    );
}

export default SongLine;
