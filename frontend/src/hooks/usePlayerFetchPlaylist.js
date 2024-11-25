import { useCallback } from 'react';
import { fetchSong, fetchAlbum, fetchArtist,fetchSongsFromAlbum } from '../api';
import usePlayer from './usePlayer';

const usePlayerFetchPlaylist = () => {
    const { setPlayerIds } = usePlayer();

    const fetchAndSetPlaylist = useCallback(async (songsList) => {
        try {
            const songsIds = songsList.map((song) => song.id);

            setPlayerIds({
                ids: songsIds,
            });

        } catch (error) {
            console.error('Error fetching song data:', error);
        }
    }, [setPlayerIds]);

    return fetchAndSetPlaylist; 
};

export default usePlayerFetchPlaylist;
