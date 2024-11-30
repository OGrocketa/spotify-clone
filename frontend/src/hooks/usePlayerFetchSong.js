import { useCallback } from 'react';
import { fetchSong, fetchAlbum, fetchArtist } from '../api';
import usePlayer from './usePlayer';

const usePlayerFetchSong = () => {
    const { setPlayerSongData } = usePlayer();

    const fetchAndSetSong = useCallback(async (song_id) => {
        try {
            const songData = await fetchSong(song_id);
            const albumData = await fetchAlbum(songData.album_id);
            const artistData = await fetchArtist(albumData.artist_id);
            
            const player_song_data = {
                curId: songData.id,
                title: songData.title,
                file_url: songData.file_url,
                cover_url: albumData.cover_url,
                name: artistData.name,
                artist_id: artistData.id,
            }
            setPlayerSongData(player_song_data);

        } catch (error) {
            console.error('Error fetching song data:', error);
        }
    }, [setPlayerSongData]);

    return fetchAndSetSong; 
};

export default usePlayerFetchSong;
