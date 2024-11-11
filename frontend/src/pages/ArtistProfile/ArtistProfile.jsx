import "./ArtistProfile"
import SongsList from "../../components/SongsList/SongsList";
import PlayAlbumLine from "../../components/PlayAlbumLine/PlayAlbumLine";
import { fetchArtist } from "../../api";
import { useState, useEffect } from "react";



function getPopularSongs (artist_id){
    return;
}


function getAlbums (artist_id){
    return;
}

const ArtistProfile = ({artist_id}) =>{
    console.log(artist_id);
    const [artist, setArtist] = useState(null);

    useEffect(() => {
        const loadArtist = async () => {
        try {
            const fetchedArtist = await fetchArtist(artist_id);
            setArtist(fetchedArtist);
        } catch (error) {
            console.error('Failed to load artist', error);
        }
        };

        loadArtist();
    }, [artist_id]); // Effect runs whenever the artistId changes

    // Conditional rendering to handle loading and error states
    if (!artist) {
        return <div>Loading...</div>;
    }

    
    return(
        <div className="artist-profile-container">
             <div className="artist-header" style={headerStyle}> 
                
             
             </div>  

            <PlayAlbumLine/>
            <div className="popular-songs-container">
            </div>

            <div className="discography-container">
            </div>

            <div>

            </div>

        </div>
    );
}

export default ArtistProfile