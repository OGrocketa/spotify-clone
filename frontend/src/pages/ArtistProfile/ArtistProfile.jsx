import React, { useState, useEffect } from 'react';
import "./ArtistProfile.css";
import SongsList from "../../components/SongsList/SongsList";
import PlayAlbumLine from "../../components/PlayAlbumLine/PlayAlbumLine";
import AlbumCard from "../../components/AlbumCard/AlbumCard";  // Import AlbumCard

import { Link, useParams } from 'react-router-dom';
import useArtist from '../../hooks/useArtist';

const ArtistProfile = () => {
    const { artist_id } = useParams();
    const {artist, songs, albums,loading} = useArtist(artist_id);

    if (loading) {
        return <div>Loading...</div>;
    }

    const artistHeaderBackgroundImg = {
        backgroundImage: `url(${artist.avatar_url})`,
    };

    return (
        <div className="artist-profile-container">
            <div className="artist-header" style={artistHeaderBackgroundImg}>
                <h1>{artist.name}</h1>
            </div>
            <PlayAlbumLine/>
            <div className="popular-songs-container">
            <span className="popular-title">Popular</span>
                <SongsList songs={songs} artistName={artist.name} limit={5}/>
            </div>
            <span className='popular-title'>Discography</span>
            <div className="discography-container">
                {albums.map((album, index) => (
                    <Link key={album.id} to={`/album/${album.id}`} className='link-no-style'>
                        <AlbumCard albumData={album} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ArtistProfile;
