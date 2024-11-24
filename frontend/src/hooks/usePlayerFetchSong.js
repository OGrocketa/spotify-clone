import { useEffect } from 'react';
import { fetchSong, fetchAlbum,fetchArtist } from '../api';
import usePlayer from './usePlayer';

const usePlayerFetchSong = (song_id) => {
    const { setPlayerData } = usePlayer();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const song_data = await fetchSong(song_id);
                const album_data = await fetchAlbum(song_data.album_id);
                const artist_data = await fetchArtist(album_data.artist_id);

                setPlayerData({
                    id: song_data.id,
                    title: song_data.title,
                    file_url: song_data.file_url,
                    cover_url: album_data.cover_url,
                    name: artist_data.name,
                });
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        if (song_id) {
            fetchData();
        }
    }, [song_id, setPlayerData]);
};

export default usePlayerFetchSong;
