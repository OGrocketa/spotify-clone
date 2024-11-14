import AlbumHeader from "../../components/AlbumHeader/AlbumHeader";
import PlayAlbumLine from "../../components/PlayAlbumLine/PlayAlbumLine";
import ArtistBadge from "../../components/ArtistBadge/ArtistBadge";
import "./SongProfile.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSong,fetchAlbum,fetchArtist } from "../../api";

const SongProfile = () => {
    const {song_id} = useParams();
    const [song, setSong] = useState(null);
    const [artist, setArtist] = useState(null);
    const [album, setAlbum] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [visibleLines, setVisibleLines] = useState(14);
    
    
    useEffect(() => {
      if (song_id) {
          fetchSong(song_id).then(song => {
              setSong(song); // Assume `song` has an `albumId`
              return fetchAlbum(song.album_id); // Chain the next fetch here
          })
          .then(albumData => {
              setAlbum(albumData); // Set the album data
              return fetchArtist(albumData.artist_id); // Chain the artist fetch
          })
          .then(artistData => {
              setArtist(artistData); // Finally set the artist data
          })
          .catch(error => console.error('Failed to fetch data', error));
      }
  }, [song_id]);
    
    const toggleLyrics = () =>{
      setIsExpanded(!isExpanded);
      setVisibleLines(isExpanded? 5 : song.lyrics.split('\n').length);
    } 

    if (!song || !album || !artist) return <p>Loading...</p>;

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
