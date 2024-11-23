import { useEffect } from 'react';
import { fetchSong } from '../api';
import usePlayer from './usePlayer';

const usePlayerFetchSong = (song_id) => {
    const { setPlayerData } = usePlayer();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const song_data = await fetchSong(song_id);
                setPlayerData({
                    id: song_data.id,
                    title: song_data.title,
                    file_url: song_data.file_url,
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
