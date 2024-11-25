import { useCallback } from 'react';
import { fetchSong, fetchAlbum, fetchArtist } from '../api';
import usePlayer from './usePlayer';

const usePlayerFetchSong = () => {
    const { setPlayerData } = usePlayer();

    const fetchAndSetSong = useCallback(async (song_id) => {
        try {
            const songData = await fetchSong(song_id);
            const albumData = await fetchAlbum(songData.album_id);
            const artistData = await fetchArtist(albumData.artist_id);

            
            setPlayerData({
                id: songData.id,
                title: songData.title,
                file_url: songData.file_url,
                cover_url: albumData.cover_url,
                name: artistData.name,
            });
        } catch (error) {
            console.error('Error fetching song data:', error);
        }
    }, [setPlayerData]);

    return fetchAndSetSong; 
};

export default usePlayerFetchSong;
