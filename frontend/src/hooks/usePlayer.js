import { create } from 'zustand';

const usePlayer = create((set) => ({
    id: null,
    file_url: "",
    title: "",
    isPlaying: false,
    artist: "",
    cover_url: "",
    setPlayerData: (song_data) =>
        set({
            id: song_data.id,
            title: song_data.title,
            file_url: song_data.file_url,
            cover_url: song_data.cover_url,
            name: song_data.name
        }),

    setPlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));

export default usePlayer;
