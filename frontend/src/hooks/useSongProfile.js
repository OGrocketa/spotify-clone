import { useState, useEffect } from "react";
import { fetchSong } from "../api/songs";
import { fetchAlbum } from "../api/albums";
import { fetchArtist } from "../api/artists";

const useSongProfile =(song_id) =>{
    const [song, setSong] = useState(null);
    const [artist, setArtist] = useState(null);
    const [album, setAlbum] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (song_id) {
            fetchSong(song_id).then(song => {
                setSong(song); // Assume `song` has an `albumId`
                return fetchAlbum(song.album_id); // Chain the next fetch here
            })
            .then(albumData => {
                setAlbum(albumData); // Set the album data
                return fetchArtist(albumData.artist_id); // Chain the artist fetch
            })
            .then(artistData => {
                setArtist(artistData); // Finally set the artist data
            })
            .then(setLoading(false))
            .catch(error => console.error('Failed to fetch data', error));
        }
    }, [song_id]);

    return {song,artist, album,loading};
};

export default useSongProfile;