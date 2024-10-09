import React from 'react';
import "./AlbumProfile.css"
import SongLine from '../../components/SongLine/SongLine';



const albumLengthObj = (albumLength) => {
    // Split the time string into parts
    const parts = albumLength.split(':');
    let minutes = parseInt(parts[0], 10);
    const seconds = parseInt(parts[1], 10);

    // Calculate hours and update minutes
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;

    // Return an object with hours, minutes, and seconds
    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
};

const AlbumProfile = () => {

    const album = {
        "id": 5,
        "title": "Swimming",
        "artistId": 3,
        "artistName": "Mac Miller",
        "releaseDate": "2018-08-03",
        "type":"album",
        "albumLength":"9:51",
        "amountOfTracks":2,
        "songs": [
          {
            "title": "Self Care",
            "duration": "5:45",
            "filePath": "artists/mac miller/albums/swimming/songs/Mac Miller - Self Care.mp3"
          },
          {
            "title": "Hurt Feelings",
            "duration": "4:06",
            "filePath": "artists/mac miller/albums/swimming/songs/Mac Miller - Hurt Feelings .mp3"
          }
        ],
        "cover": "public/artists/mac miller/albums/swimming/cover.jpg"
      }

      const artist = {
        "id": 3,
        "name": "Mac Miller",
        "bio": "Malcolm James McCormick, known professionally as Mac Miller.",
        "albums": [5, 6],
        "avatar": "public/artists/mac miller/mac miller.jpg",
        "type":"Artist"
      }

    const releaseDate = new Date(album.releaseDate);
    const releaseYear = releaseDate.getFullYear();
    const chuj= albumLengthObj(album.albumLength);

    return (
        <div className='album-page-container'>

            <div className='album-presentation'>
                <img className="album-cover" src={album.cover} alt="" />

                <div className='album-info'>
                    <div className='album-info-main'>
                        <p>{album.type}</p>
                        <h1>{album.title}</h1>
                    </div>

                    <div className='album-info-additional'>
                        <img className="artist-avatar" src={artist.avatar} alt="" />
                
                        <h3>{album.artistName} • {releaseYear} • {album.amountOfTracks} tracks, {chuj.minutes} minutes {chuj.seconds} seconds</h3> 
                    </div>
                </div>
                
                
            </div>
            <div className='album-controls'>
                <button className='play-button'></button>
            </div>
            
            <div className='songs-list'>
                <ol className='songs-ordered-list'>
                    {album.songs.map((song, index) => (
                        <li key={index}>
                            <SongLine  songData={song} artistName={album.artistName} />
                        </li>
                        
                    ))}
                </ol>
            </div>

        </div>
    );
}

export default AlbumProfile;
