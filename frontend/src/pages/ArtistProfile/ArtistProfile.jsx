import "./ArtistProfile"
import SongsList from "../../components/SongsList/SongsList";
import PlayAlbumLine from "../../components/PlayAlbumLine/PlayAlbumLine";



function getPopularSongs (artist_id){
    return;
}


function getAlbums (artist_id){
    return;
}

const ArtistProfile = ({artist_id}) =>{
    return(
        <div className="artist-profile-container">
            <div className="artist-profile-header">
                
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