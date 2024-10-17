import AlbumHeader from "../../components/AlbumHeader/AlbumHeader";
import SongLine from "../../components/SongLine/SongLine";
import PlayAlbumLine from "../../components/PlayAlbumLine/PlayAlbumLine";

const SongProfile = ({ artist, song }) => {

    return (
        <>
            <AlbumHeader artist={artist} album={song} />
            <PlayAlbumLine />
            {song.lyrics && (
                <div className="lyrics">
                    <h1>Lyrics</h1>
                    {song.lyrics.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              
            )}
        </>
    );
};

export default SongProfile;
