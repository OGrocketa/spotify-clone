import AlbumHeader from "../../components/AlbumHeader/AlbumHeader";
import SongLine from "../../components/SongLine/SongLine";
import PlayAlbumLine from "../../components/PlayAlbumLine/PlayAlbumLine";
import ArtistBadge from "../../components/ArtistBadge/ArtistBadge";
import "./SongProfile.css";
import { useState, useEffect } from "react";

const SongProfile = ({ artist, song }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [visibleLines, setVisibleLines] = useState(14);

    const toggleLyrics = () =>{
      setIsExpanded(!isExpanded);
      setVisibleLines(isExpanded? 5 : song.lyrics.split('\n').length);
    } 
    return (
        <>
            <AlbumHeader artist={artist} album={song} />
            <PlayAlbumLine />
            {song.lyrics && (
              <div className="song-profile-body-container">
                <div className="lyrics">
                    <h1>Lyrics</h1>
                    {song.lyrics.split('\n').slice(0,visibleLines).map((line, index) => (
                      <p key={index}>{line}</p>
                ))}
                
                  <button onClick={toggleLyrics}>
                    {isExpanded ? 'Show Less' : '...Show More'}
                  </button>
                </div>
                
                <div className="artist-badge">
                  <ArtistBadge artist={artist}/>
                </div>
                  
              </div>
                
            )}
        </>
    );
};

export default SongProfile;
