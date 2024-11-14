import React from 'react';
import './AlbumHeader.css';
import { fetchAlbum } from '../../api';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';


const albumLengthObj = (album_length) => {
    if (!album_length || typeof album_length !== 'string') {
        // Return a default structure or handle error accordingly
        return { hours: 0, minutes: 0, seconds: 0 };
    }

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

    const [fetchedAlbum, setFetchedAlbum] = useState(null);
    
    useEffect(() => {
        if (!album.cover_url && album.album_id) {
            fetchAlbum(album.album_id)
                .then(data => {
                    setFetchedAlbum(data);
                })
                .catch(error => console.error('Failed to fetch album', error));
        }
    }, [album]);

    const releaseDate = new Date(album.release_date);
    const releaseYear = releaseDate.getFullYear();
    const album_length = album.album_length ? album.album_length : album.song_length;
    const album_length_obj = albumLengthObj(album_length);
    const album_type = album.album_type ? album.album_type : 'Song';
    

    return (
        <div className='album-header'>
            <img className="album-cover" src={(fetchedAlbum || album).cover_url} alt="" />

            <div className='album-info'>
                <div className='album-info-main'>
                    <p>{album_type}</p>
                    <h1>{album.title}</h1>
                </div>

                <div className='album-info-additional'>
                    <img className="artist-avatar" src={artist.avatar_url} alt={artist.name} />
                    
                    <h3>
                        <Link to={`/artist/${artist.id}`} className="link-no-style">
                            <span className='artist-name'>{artist.name}</span>
                        </Link>
                        <span className='additional-info'>• {releaseYear} • 
                        {album.amountOfTracks > 1 && ` • ${album.amountOfTracks} tracks`}
                        {formatAlbumLength(album_length_obj)}
                        </span>
                        
                    </h3> 
                </div>
            </div>
        </div>
    );
};

export default AlbumHeader;
