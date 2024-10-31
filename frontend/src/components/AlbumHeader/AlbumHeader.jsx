import React from 'react';
import './AlbumHeader.css';

const albumLengthObj = (album_length) => {
    const parts = album_length.split(':');
    let hours = parseInt(parts[0], 10);
    let minutes = parseInt(parts[1], 10);
    let seconds = parseInt(parts[2], 10);

    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
};

const formatAlbumLength = (album_length) => {
    if (album_length.hours > 4) {
        return ` around ${album_length.hours} hours`;
    } else if (album_length.hours > 0) {
        if (album_length.hours === 1) {
            return ` ${album_length.hours} hour ${album_length.minutes} minutes`;
        } else {
            return ` ${album_length.hours} hours ${album_length.minutes} minutes`;
        }
    } else {
        return ` ${album_length.minutes} minutes ${album_length.seconds} seconds`;
    }
};

const AlbumHeader = ({ album, artist }) => {
    const releaseDate = new Date(album.release_date);
    const releaseYear = releaseDate.getFullYear();
    const album_length = albumLengthObj(album.album_length);

    return (
        <div className='album-header'>
            <img className="album-cover" src={album.cover_url} alt="" />

            <div className='album-info'>
                <div className='album-info-main'>
                    <p>{album.type}</p>
                    <h1>{album.title}</h1>
                </div>

                <div className='album-info-additional'>
                    <img className="artist-avatar" src={artist.avatar} alt={artist.name} />
                    
                    <h3>
                        <span className='artist-name'>{album.artistName}</span>
                        <span className='additional-info'>• {releaseYear} • 
                        {album.amountOfTracks > 1 && ` • ${album.amountOfTracks} tracks`}
                        {formatAlbumLength(album_length)}
                        </span>
                        
                    </h3> 
                </div>
            </div>
        </div>
    );
};

export default AlbumHeader;
