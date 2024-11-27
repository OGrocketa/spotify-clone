import AlbumHeader from "../../components/AlbumHeader/AlbumHeader";
import PlayAlbumLine from "../../components/PlayAlbumLine/PlayAlbumLine";
import ArtistBadge from "../../components/ArtistBadge/ArtistBadge";
import "./SongProfile.css";
import { useState } from "react";
import { useParams,Link } from "react-router-dom";
import useSongProfile from "../../hooks/useSongProfile";

const SongProfile = () => {
    const {song_id} = useParams();
    const {song, artist, album,loading} = useSongProfile(song_id);
    const [isExpanded, setIsExpanded] = useState(false);
    const [visibleLines, setVisibleLines] = useState(14);

    if (loading || !song || !artist || !album) return <p>Loading...</p>;
    
    const toggleLyrics = () =>{
      setIsExpanded(!isExpanded);
      setVisibleLines(isExpanded? 5 : song.lyrics.split('\n').length);
    } 
    song['cover_url'] = album.cover_url;

    return (
        <>
            <AlbumHeader artist={artist} album={song} />
            <PlayAlbumLine songs= {[song]} />
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
                
                
                  
              </div>
                
            )}
            <Link to={`/artist/${artist.id}`} className='link-no-style'>
              <div className="artist-badge">
                    <ArtistBadge artist={artist}/>
              </div>
            </Link>
           
        </>
    );
};

export default SongProfile;
