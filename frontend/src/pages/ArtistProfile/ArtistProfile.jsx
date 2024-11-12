import React, { useState, useEffect } from 'react';
import "./ArtistProfile.css";
import SongsList from "../../components/SongsList/SongsList";
import PlayAlbumLine from "../../components/PlayAlbumLine/PlayAlbumLine";
import AlbumCard from "../../components/AlbumCard/AlbumCard";  // Import AlbumCard
import { fetchArtist, fetchTopSongsByArtist, fetchAlbumsByartist_id } from "../../api";

const ArtistProfile = ({ artist_id }) => {
    const [artist, setArtist] = useState(null);
    const [songs, setSongs] = useState([]);
    const [albums, setAlbums] = useState([]);  // State for albums

    useEffect(() => {
        const loadArtistData = async () => {
            try {
                const fetchedArtist = await fetchArtist(artist_id);
                setArtist(fetchedArtist);
                const fetchedSongs = await fetchTopSongsByArtist(artist_id);
                setSongs(fetchedSongs);
                const fetchedAlbums = await fetchAlbumsByartist_id(artist_id);  // Fetch albums
                setAlbums(fetchedAlbums);
            } catch (error) {
                console.error('Failed to load artist data', error);
            }
        };

        loadArtistData();
    }, [artist_id]);

    if (!artist) {
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
                    <AlbumCard key={index} albumData={album} />
                ))}
            </div>
        </div>
    );
};

export default ArtistProfile;
