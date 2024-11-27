import React from "react";
import "./PlayAlbumLine.css";
import { IoIosPlay, IoMdAddCircleOutline } from "react-icons/io";
import usePlayerFetchPlaylist from "../../hooks/usePlayerFetchPlaylist";
import usePlayerFetchSong from "../../hooks/usePlayerFetchSong";

const PlayAlbumLine = ({songs}) => {
    const fetchAndSetSong = usePlayerFetchSong();
    const fetchAndSetPlaylist = usePlayerFetchPlaylist();

    const curIndex = songs.findIndex((someSong) => someSong.id === songs[0].id);
    const filteredSongs = songs.map((someSong) => someSong.id);

    const handlePlay = () => {
        fetchAndSetPlaylist(filteredSongs);
        fetchAndSetSong(filteredSongs[curIndex]); 
    };

    return ( 
        <div className="play-album-container">
            <button className="play-album-button" onClick={handlePlay}>
                <IoIosPlay size={30} />
            </button>
            <button className="add-to-library-button">
                <IoMdAddCircleOutline size={35} />
            </button>
        </div>
    );
};

export default PlayAlbumLine;
