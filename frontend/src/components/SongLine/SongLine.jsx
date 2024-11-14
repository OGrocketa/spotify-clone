import React, { useState } from 'react';
import { IoIosPlay } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";
import "./SongLine.css"
import { Link } from 'react-router-dom';

const SongLine = ({ song, artistName ,num}) => {
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
                <Link to={`/song/${song.id}`} className='link-no-style'>
                    <p className='song-title'>{song.title}</p>
                </Link>
                    <p className='song-artist'>{artistName}</p>
                </div>
                <div className="right-controls">
                    <button className="add-to-playlist-button">
                        <IoMdAddCircleOutline size={22} />
                    </button>
                    <p>{song.duration}</p>
                </div>
            </div>
        </div>
    );
}

export default SongLine;
