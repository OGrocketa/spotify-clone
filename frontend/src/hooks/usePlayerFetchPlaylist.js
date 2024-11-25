import { useCallback } from 'react';
import { fetchSong, fetchAlbum, fetchArtist,fetchSongsFromAlbum } from '../api';
import usePlayer from './usePlayer';

const usePlayerFetchPlaylist = () => {
    const { setPlayerIds } = usePlayer();

    const fetchAndSetPlaylist = useCallback(async (songsIds) => {
        try {
            
            setPlayerIds(songsIds);

        } catch (error) {
            console.error('Error fetching song data:', error);
        }
    }, [setPlayerIds]);

    return fetchAndSetPlaylist; 
};

export default usePlayerFetchPlaylist;
