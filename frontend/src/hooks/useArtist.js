import { useState, useEffect } from 'react';
import { fetchArtist } from '../api/artists';
import { fetchTopSongsByArtist } from '../api/songs';
import { fetchAlbumsByartist_id } from '../api/albums';

// Load artist data by artist id
const useArtist = (artist_id) =>{
    const [artist, setArtist] = useState(null);
    const [songs, setSongs] = useState([]);
    const [albums, setAlbums] = useState([]); 
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const loadArtistData = async () => {
            try {
                const fetchedArtist = await fetchArtist(artist_id);
                setArtist(fetchedArtist);
                const fetchedSongs = await fetchTopSongsByArtist(artist_id);
                setSongs(fetchedSongs);
                const fetchedAlbums = await fetchAlbumsByartist_id(artist_id);  
                setAlbums(fetchedAlbums);
            } catch (error) {
                console.error('Failed to load artist data', error);
            }finally{
                setLoading(false);
            }
        };

        loadArtistData();
    }, [artist_id]);

    return {artist,songs, albums,loading};
}
export default useArtist;