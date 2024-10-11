import React from "react";
import "./PlayAlbumLine.css";
import { IoIosPlay, IoMdAddCircleOutline } from "react-icons/io";

const PlayAlbumLine = () => {
    return ( 
        <div className="play-album-container">
            <button className="play-album-button">
                <IoIosPlay size={30} />
            </button>
            <button className="add-to-library-button">
                <IoMdAddCircleOutline size={35} />
            </button>
        </div>
    );
};

export default PlayAlbumLine;
