import AlbumHeader from "../../components/AlbumHeader/AlbumHeader";
import SongLine from "../../components/SongLine/SongLine";
import PlayAlbumLine from "../../components/PlayAlbumLine/PlayAlbumLine";

const SongProfile = ({ artist, song }) => {
    console.log(song.AlbumLength);

    return (
        <>
            <AlbumHeader artist={artist} album={song} />
            <PlayAlbumLine />
            {song.lyrics && (
                <div className="Lyrics">
                    <p>{song.lyrics}</p>
                </div>
            )}
        </>
    );
};

export default SongProfile;
