import React from 'react';
import './AlbumHeader.css';

const albumLengthObj = (albumLength) => {
    const parts = albumLength.split(':');
    let minutes = parseInt(parts[0], 10);
    const seconds = parseInt(parts[1], 10);

    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;

    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
};

const formatAlbumLength = (albumLength) => {
    if (albumLength.hours > 4) {
        return ` around ${albumLength.hours} hours`;
    } else if (albumLength.hours > 0) {
        if (albumLength.hours === 1) {
            return ` ${albumLength.hours} hour ${albumLength.minutes} minutes`;
        } else {
            return ` ${albumLength.hours} hours ${albumLength.minutes} minutes`;
        }
    } else {
        return ` ${albumLength.minutes} minutes ${albumLength.seconds} seconds`;
    }
};

const AlbumHeader = ({ album, artist }) => {
    const releaseDate = new Date(album.releaseDate);
    const releaseYear = releaseDate.getFullYear();
    const albumLength = albumLengthObj(album.albumLength);

    return (
        <div className='album-header'>
            <img className="album-cover" src={album.cover} alt="" />

            <div className='album-info'>
                <div className='album-info-main'>
                    <p>{album.type}</p>
                    <h1>{album.title}</h1>
                </div>

                <div className='album-info-additional'>
                    <img className="artist-avatar" src={artist.avatar} alt={artist.name} />
                    
                    <h3>
                        <span className='artist-name'>{album.artistName}</span> • {releaseYear} • {album.amountOfTracks} tracks,
                        {formatAlbumLength(albumLength)}
                    </h3> 
                </div>
            </div>
        </div>
    );
};

export default AlbumHeader;
